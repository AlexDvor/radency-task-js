import refs from './refs';
import { todoData } from './header-menu-button';

refs.todoList.addEventListener('click', onOperationsTodo);

function onOperationsTodo(e) {
  const currentActiveIcon = e.target.dataset.action;
  const pathItem = e.composedPath();
  const currentId = pathItem[3].id || pathItem[5].id;

  switch (currentActiveIcon) {
    case 'edit':
      editTodoOperation();
      break;
    case 'archive':
      archiveTodoOperation();
      break;
    case 'remove':
      removeTodoOperation(currentId);
  }
}

function editTodoOperation() {
  console.log('edit');
}

function removeTodoOperation(id) {
  console.log('remove');
}
// todoData.removeTodoItemById(id);

function archiveTodoOperation() {
  console.log('archive');
}
