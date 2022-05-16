import refs from './refs';
import { todoData } from './create-todo-modal';

refs.todoList.addEventListener('click', onOperationsTodo);

function onOperationsTodo(e) {
  const currentActiveIcon = e.target.dataset.action;
  const pathItem = e.composedPath();
  const currentId = pathItem[3].id || pathItem[5].id;

  switch (currentActiveIcon) {
    case 'edit':
      console.log('Edit');
      break;
    case 'archive':
      console.log('archive');
      break;
    case 'remove':
      todoData.removeTodoItemById(currentId);
  }
}

function editTodo() {}
