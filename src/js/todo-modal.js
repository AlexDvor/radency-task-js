import refs from './refs';
import Todo from './Todo';
import Modal from './Modal';
import getSelectIndex from './helpers/select-index';
import tippy from 'tippy.js';
import { tooltipParams } from './helpers/tooltip-params';
import { getStats } from './stats';

const todoData = new Todo();
const modal = new Modal();

todoData.getTodoDataFromLocalStorage();
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
  modal.openModal(e);
  refs.confirmModalButton.textContent = 'Create';
  refs.titleModal.textContent = 'Create to do list';
  refs.confirmModalButton.dataset.button = 'create';
}

function onCloseModal(e) {
  modal.closeModal(e);
}

function onBackdropClick(e) {
  modal.backdropClick(e);
}

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
  const result = modal.formSubmit(e);
  const typeBtn = refs.confirmModalButton.dataset.button;

  if (result && typeBtn === 'create') {
    todoData.addTodoItem(result);
  }
  if (result && typeBtn === 'confirm') {
    todoData.editTodoItem(result);
    // console.log(result);
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

tippy(refs.creatButtonItem, {
  content: 'Add todo',
  ...tooltipParams,
});

export { todoData, modal };
