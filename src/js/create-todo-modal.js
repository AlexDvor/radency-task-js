import refs from './refs';
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns';
import Todo from './Todo';
import Modal from './Modal';

export const todoData = new Todo();
const creatModal = new Modal();

todoData.getTodoListFromLocalStorage();

refs.creatButtonItem.addEventListener('click', e => creatModal.onOpenModal(e));
refs.exitIcon.addEventListener('click', e => creatModal.onCloseModal(e));
refs.overlay.addEventListener('click', e => creatModal.onBackdropClick(e));

refs.selectOptions.addEventListener('click', onClickSelectOptions);
refs.selectContent.addEventListener('click', onClickSelectContent);
refs.form.addEventListener('submit', onFormSubmit);

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
  e.preventDefault();
  const formData = e.currentTarget.elements;
  const category = formData.category.value;
  const content = formData.content.value;
  const objective = formData.objective.value;
  const currentData = getCurrentCalendarData();
  const currentTime = getCurrentTime();
  const id = uuidv4().slice(0, 6);
  const isValidForm = validateForm(formData);

  if (isValidForm) {
    todoData.addTodoItem({ id, category, content, objective, currentData, currentTime });
    onCloseModal();
    resetForm();
  }
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

function getSelectIndex(collection, value) {
  const newArr = [];
  for (let i = 0; i < collection.length; i++) {
    newArr.push(collection[i].attributes.rel.value);
  }

  const response = newArr.indexOf(value);
  if (response === -1) {
    return console.log('Unable to locate element name');
  } else {
    return response;
  }
}

function getCurrentCalendarData() {
  return format(new Date(), 'dd/MM/yy');
}

function getCurrentTime() {
  return format(new Date(), 'HH:mm');
}

function validateForm(dataForm) {
  for (let i = 0; i < dataForm.length - 1; i++) {
    if (dataForm[i].value === '') {
      dataForm[i].classList.add('is-empty');
      return console.log(`${dataForm[i].name} is empty`);
    } else {
      dataForm[i].classList.remove('is-empty');
    }

    if (dataForm[i].value === 'hide') {
      refs.selectContent.classList.add('is-empty');
      return console.log(`${dataForm[i].name} is empty`);
    } else {
      refs.selectContent.classList.remove('is-empty');
    }
    console.dir(`${dataForm[i].name} : ${dataForm[i].value}`);
  }
  return true;
}
