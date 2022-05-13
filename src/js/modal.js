import ref from './ref';
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns';
import Todo from './Todo';

export const todoData = new Todo();

todoData.getTodoListFromLocalStorage();

ref.creatButtonItem.addEventListener('click', openCreateModal);
ref.exitIcon.addEventListener('click', onCloseModal);
ref.overlay.addEventListener('click', onBackdropClick);
ref.selectOptions.addEventListener('click', onClickSelectOptions);
ref.selectContent.addEventListener('click', onClickSelectContent);
ref.form.addEventListener('submit', onFormSubmit);

function openCreateModal(e) {
  window.addEventListener('keydown', onKeyDownClick);
  ref.modal.classList.add('lightbox--open');
}

function onCloseModal(e) {
  window.removeEventListener('keydown', onKeyDownClick);
  ref.modal.classList.remove('lightbox--open');
  resetForm();
}

function onKeyDownClick(e) {
  if (e.code === 'Escape') {
    onCloseModal();
  }
}

function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    onCloseModal();
  }
}

function resetForm() {
  const defaultValue = ref.selectOptions.children[0].textContent;
  ref.selectContent.textContent = defaultValue;
  ref.selectOptions.classList.remove('select-options--open');
  ref.form.reset();
}

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

function onClickSelectOptions(e) {
  const selectValue = e.target.textContent;
  const attributeValue = e.target.attributes.rel.value;
  const selectIndex = getSelectIndex(ref.selectOptions.children, attributeValue);
  const iconRef = e.target.children[0].lastElementChild.className;
  const wrapperIcon = `<span class="select-options__icon"> <i class='${iconRef}'></i></span >`;
  ref.selectField.options.selectedIndex = selectIndex;
  ref.selectContent.textContent = selectValue;
  ref.selectContent.insertAdjacentHTML('afterBegin', wrapperIcon);
  ref.selectContent.classList.toggle('active');
  ref.selectOptions.classList.toggle('select-options--open');
}

function onClickSelectContent() {
  ref.selectContent.classList.toggle('active');
  ref.selectOptions.classList.toggle('select-options--open');
}

function getCurrentCalendarData() {
  return format(new Date(), 'dd/MM/yy');
}

function getCurrentTime() {
  return format(new Date(), 'HH:mm');
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

  // todoData.addTodoItem({ id, category, content, objective, currentData, currentTime });
  // console.log(todoData.getTodoData());
  // const contentValude = formData.content.value;
  // const data = {};
  // const formData = new FormData(e.currentTarget);
  // formData.forEach((value, key) => {
  //   data[key] = value;
  // });
  //

  for (let i = 0; i < formData.length - 1; i++) {
    console.dir(`${formData[i].name} : ${formData[i].value}`);
  }

  // console.log('ref.selectField.value', ref.selectField.value);
  // const testSelect = document.querySelector('.select-test');
  // testSelect.options.selectedIndex = testSelect.options[2].value;
  // console.dir(testSelect);
  // console.dir(ref.selectField);

  resetForm();
}
