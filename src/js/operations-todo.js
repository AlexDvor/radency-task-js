import refs from './refs';
import { todoData } from './todo-modal';
import { modal } from './todo-modal';
import { updateDoneItem, updateArchivedItem } from './stats';
import { updateStatsActiveItem } from './stats';
import changeStyleForEditModal from './helpers/changeStyleForEditModal';

refs.todoList.addEventListener('click', onOperationsTodo);

function onOperationsTodo(event) {
  const currentActiveIcon = event.target.dataset.action;
  const pathItem = event.composedPath();
  const currentId = pathItem[3].id || pathItem[5].id;

  switch (currentActiveIcon) {
    case 'done':
      doneTodoOperation(currentId);
      break;
    case 'edit':
      editTodoOperation(event, currentId);
      break;
    case 'archive':
      archiveTodoOperation(currentId);
      break;
    case 'remove':
      removeTodoOperation(currentId);
  }
}

function doneTodoOperation(id) {
  const currentItem = todoData.relocateTodoItemToDoneList(id);
  updateDoneItem(currentItem);
}

function editTodoOperation(e, id) {
  const currentTodoItem = todoData.getTodoData().find(item => item.id === id);
  const { category, content, objective } = refs.form.elements;
  category.value = currentTodoItem.category;
  content.value = currentTodoItem.content;
  objective.value = currentTodoItem.objective;
  changeStyleForEditModal(currentTodoItem);
  modal.setId(id);
  modal.openModal();
}

function removeTodoOperation(id) {
  const currentItem = todoData.removeTodoItemById(id, 'todo');
  updateStatsActiveItem(currentItem);
}

function archiveTodoOperation(id) {
  const relocatedItem = todoData.relocateTodoItemToArchiveList(id);
  updateArchivedItem(relocatedItem);
}
