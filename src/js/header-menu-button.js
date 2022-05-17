import refs from './refs';
import { v4 as uuidv4 } from 'uuid';
import validateForm from './helpers/validate-form';
import getCurrentCalendarData from './helpers/calendar-data';
import getCurrentTime from './helpers/current-time';
import getSelectIndex from './helpers/select-index';

import Todo from './Todo';
import Modal from './Modal';

export const todoData = new Todo();
const creatModal = new Modal();

todoData.getTodoListFromLocalStorage();
// buttons Listener
refs.creatButtonItem.addEventListener('click', onOpenModal);
// select and form Listener
refs.selectOptions.addEventListener('click', onClickSelectOptions);
refs.selectContent.addEventListener('click', onClickSelectContent);
refs.form.addEventListener('submit', onFormSubmit);
// modal Listener
refs.exitIcon.addEventListener('click', onCloseModal);
refs.overlay.addEventListener('click', onBackdropClick);

function onOpenModal(e) {
  creatModal.openModal(e);
  refs.confirmModalButton.textContent = 'Create';
  refs.titleModal.textContent = 'Create to do list';
  refs.confirmModalButton.dataset.button = 'create';
}

function onCloseModal(e) {
  creatModal.closeModal(e);
}

function onBackdropClick(e) {
  creatModal.backdropClick(e);
}
// function openCreateModal(e) {
//   window.addEventListener('keydown', onKeyDownClick);
//   refs.modal.classList.add('lightbox--open');
// }

// function onCloseModal(e) {
//   window.removeEventListener('keydown', onKeyDownClick);
//   refs.modal.classList.remove('lightbox--open');
//   resetForm();
// }

// function onBackdropClick(e) {
//   if (e.currentTarget === e.target) {
//     onCloseModal();
//   }
// }

// function onKeyDownClick(e) {
//   if (e.code === 'Escape') {
//     onCloseModal();
//   }
// }

function onClickSelectOptions(e) {
  const selectValue = e.target.textContent;
  const attributeValue = e.target.attributes.rel.value;
  const selectIndex = getSelectIndex(refs.selectOptions.children, attributeValue);
  const iconRef = e.target.children[0].lastElementChild.className;
  const wrapperIcon = `<span class="select-options__icon"> <i class='${iconRef}'></i></span >`;
  refs.selectField.options.selectedIndex = selectIndex;
  refs.selectContent.textContent = selectValue;
  refs.selectContent.insertAdjacentHTML('afterBegin', wrapperIcon);
  refs.selectContent.classList.toggle('active');
  refs.selectOptions.classList.toggle('select-options--open');
}

function onClickSelectContent() {
  refs.selectContent.classList.toggle('active');
  refs.selectOptions.classList.toggle('select-options--open');
}

function onFormSubmit(e) {
  const result = creatModal.formSubmit(e);
  const typeBtn = refs.confirmModalButton.dataset.button;

  if (result && typeBtn === 'create') {
    todoData.addTodoItem(result);
  }
  if (result && typeBtn === 'confirm') {
    console.log('updated item todo');
  }
  // e.preventDefault();
  // const formData = e.currentTarget.elements;
  // const category = formData.category.value;
  // const content = formData.content.value;
  // const objective = formData.objective.value;
  // const currentData = getCurrentCalendarData();
  // const currentTime = getCurrentTime();
  // const id = uuidv4().slice(0, 6);
  // const isValidForm = validateForm(formData);

  // if (isValidForm) {
  //   todoData.addTodoItem({ id, category, content, objective, currentData, currentTime });
  //   onCloseModal();
  //   resetForm();
  // }
  // const contentValude = formData.content.value;
  // const data = {};
  // const formData = new FormData(e.currentTarget);
  // formData.forEach((value, key) => {
  //   data[key] = value;
  // });
  //////////////
}

// function resetForm() {
//   const defaultValue = refs.selectOptions.children[0].textContent;
//   refs.selectContent.textContent = defaultValue;
//   refs.selectOptions.classList.remove('select-options--open');
//   refs.selectContent.classList.remove('is-empty');
//   refs.form.elements.category.classList.remove('is-empty');
//   refs.form.elements.content.classList.remove('is-empty');
//   refs.form.reset();
// }
