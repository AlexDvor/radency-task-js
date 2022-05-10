import ref from './ref';
import { todoData } from './modal';

ref.todoList.addEventListener('click', onRemoveItem);

function onRemoveItem(e) {
  const currentActiveIcon = e.target.dataset.action;
  const pathItem = e.composedPath();
  const currentId = pathItem[5].id;

  switch (currentActiveIcon) {
    case 'edit':
      console.log(currentId);
      break;
    case 'archiving':
      console.log(currentId);
      break;
    case 'remove':
      console.log(currentId);
      todoData.removeTodoItemById(currentId);
  }
}
