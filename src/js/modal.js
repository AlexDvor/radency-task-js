import ref from './ref';
import TodoItems from './maker-todo-item';
import { v4 as uuidv4 } from 'uuid';

const todoData = new TodoItems();
todoData.getTodoListFromLS();

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
  resetSelect();
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

function resetSelect() {
  const defaultValue = ref.selectOptions.children[0].textContent;
  ref.selectContent.textContent = defaultValue;
  ref.selectOptions.classList.remove('select-options--open');
}

function onClickSelectOptions(e) {
  const selectValue = e.target.textContent;
  const attributeValue = e.target.attributes.rel.value;
  const iconRef = e.target.children[0].lastElementChild.className;
  const wrapperIcon = `<span class="select-options__icon"> <i class='${iconRef}'></i></span >`;
  ref.selectContent.textContent = selectValue;
  ref.selectField.options[ref.selectField.selectedIndex].value = attributeValue;
  ref.selectContent.insertAdjacentHTML('afterBegin', wrapperIcon);
  ref.selectContent.classList.toggle('active');
  ref.selectOptions.classList.toggle('select-options--open');
}

function onClickSelectContent() {
  ref.selectContent.classList.toggle('active');
  ref.selectOptions.classList.toggle('select-options--open');
}

function onFormSubmit(e) {
  e.preventDefault();
  const formData = e.currentTarget.elements;
  const category = formData.category.value;
  const content = formData.content.value;
  const objective = formData.objective.value;
  const id = uuidv4().slice(0, 6);
  todoData.addTodoItem({ id, category, content, objective });
  // console.log(todoData.getTodoData());
  // const contentValude = formData.content.value;
  // const data = {};
  // const formData = new FormData(e.currentTarget);
  // formData.forEach((value, key) => {
  //   data[key] = value;
  // });
}

// const s = document.querySelector('.select-field-a');
// // console.log('s', s);

// s.addEventListener('click', e => {
//   console.log(s.options[s.selectedIndex].value);
//   // const option = (s.options[s.selectedIndex].value = 1111);
// });

// --------------------------------------------------------------
// const formRef = ref.form.querySelectorAll('select');

// createSelectList(formRef);

// function createSelectList(nodeList) {
//   nodeList.forEach(element => {
//     const selectWrapperElement = document.createElement('div');
//     selectWrapperElement.classList.add('select');

//     const wrapElement = document.createElement('div');
//     wrapElement.classList.add('select-styled');
//     wrapElement.textContent = `${element.children[0].textContent}`;

//     const listElement = document.createElement('ul');
//     listElement.classList.add('select-options');

//     selectWrapperElement.append(element, wrapElement, listElement);

//     element.classList.add('select-hidden');
//     ref.form.append(selectWrapperElement);

//     for (let i = 0; i < element.children.length; i++) {
//       const itemEl = document.createElement('li');
//       itemEl.textContent = element.children[i].textContent;
//       itemEl.setAttribute('rel', `${element.children[i].value}`);
//       listElement.append(itemEl);
//     }
//   });
// }

// const selectStyledRef = document.querySelectorAll('.select-styled');

// selectStyledRef.forEach(element =>
//   element.addEventListener('click', e => {
//     selectStyledRef.forEach(item => {
//       if (item.nextElementSibling.classList.contains('select-options--open')) {
//         item.nextElementSibling.classList.remove('select-options--open');
//       }
//       if (item.classList.contains('active')) {
//         item.classList.remove('active');
//       }
//     });
//     element.classList.toggle('active');
//     element.nextElementSibling.classList.toggle('select-options--open');
//   }),
// );

// const selectOptionsRef = document.querySelectorAll('.select-options');

// selectOptionsRef.forEach(element =>
//   element.addEventListener('click', e => {
//     const value = e.target.textContent;
//     e.path[2].children[1].textContent = value;
//     e.path[2].children[1].classList.remove('active');
//     e.path[2].children[2].classList.remove('select-options--open');
//   }),
// );

// --------------------------------------------------------------
// const selectStyledRef = document.querySelector('.select-styled');
// const selectOptionsRef = document.querySelector('.select-options');

// selectStyledRef.addEventListener('click', () => {
//   selectOptionsRef.classList.toggle('select-options--open');
//   selectStyledRef.classList.toggle('active');
// });

// selectOptionsRef.addEventListener('click', e => {
//   selectStyledRef.textContent = e.target.textContent;
//   selectStyledRef.classList.toggle('active');
//   selectOptionsRef.classList.toggle('select-options--open');
// });
