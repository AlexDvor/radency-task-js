import refs from './refs';
import { todoData } from './todo-modal';
import { modal } from './todo-modal';
import { updateDoneItem, updateArchivedItem } from './stats';
import changeStyleForEditModal from './helpers/changeStyleForEditModal';
import tippy from 'tippy.js';

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
  const relocatedItem = todoData.relocateTodoItemToDoneList(id);
  updateDoneItem(relocatedItem);
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
  todoData.removeTodoItemById(id, 'todo');
}

function archiveTodoOperation(id) {
  const relocatedItem = todoData.relocateTodoItemToArchiveList(id);
  updateArchivedItem(relocatedItem);
}

tippy('#doneBtn', {
  content: 'Done',
  delay: [500, 200],
  animation: 'scale',
  theme: 'light',
});

tippy('#editBtn', {
  content: 'Edit',
  delay: [500, 200],
  animation: 'scale',
  theme: 'light',
});

tippy('#archiveBtn', {
  content: 'Archive',
  delay: [500, 200],
  animation: 'scale',
  theme: 'light',
});

tippy('#removeBtn', {
  content: 'Delete',
  delay: [500, 200],
  animation: 'scale',
  theme: 'light',
});
