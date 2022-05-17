import refs from './refs';
import { todoData } from './header-menu-button';
import { parseCategory } from './handlebars';
import Modal from './Modal';
import getIconRef from './helpers/getIconRef';

refs.todoList.addEventListener('click', onOperationsTodo);
const modal = new Modal();

function onOperationsTodo(event) {
  const currentActiveIcon = event.target.dataset.action;
  const pathItem = event.composedPath();
  const currentId = pathItem[3].id || pathItem[5].id;

  switch (currentActiveIcon) {
    case 'edit':
      editTodoOperation(event, currentId);
      break;
    case 'archive':
      archiveTodoOperation();
      break;
    case 'remove':
      removeTodoOperation(currentId);
  }
}

function editTodoOperation(e, id) {
  const currentTodoItem = todoData.getTodoData().find(item => item.id === id);
  const { category, content, objective } = refs.form.elements;
  category.value = currentTodoItem.category;
  content.value = currentTodoItem.content;
  objective.value = currentTodoItem.objective;
  changeStyleForEditModal(currentTodoItem);
  modal.setId(id);
  console.log(modal.getId());
  modal.openModal();
}

function removeTodoOperation(id) {
  console.log('delete');
  todoData.removeTodoItemById(id);
}

function archiveTodoOperation() {
  console.log('archive');
}

function changeStyleForEditModal({ category }) {
  const iconRef = getIconRef(category);
  const wrapperIcon = `<span class="select-options__icon"> <i class='${iconRef}'></i></span >`;
  refs.selectContent.textContent = parseCategory(category);
  refs.selectContent.insertAdjacentHTML('afterBegin', wrapperIcon);
  refs.confirmModalButton.textContent = 'Confirm';
  refs.confirmModalButton.dataset.button = 'confirm';
  refs.titleModal.textContent = 'Edit To Do';
}
