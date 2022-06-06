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
    getStats();
  }
  if (result && typeBtn === 'confirm') {
    todoData.editTodoItem(result);
  }
}

tippy(refs.creatButtonItem, {
  content: 'Add todo',
  ...tooltipParams,
});

export { todoData, modal };
