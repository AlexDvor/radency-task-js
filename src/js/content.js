import ref from './ref';
import { todoData } from './modal';

ref.todoList.addEventListener('click', onRemoveItem);

function onRemoveItem(e) {
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
