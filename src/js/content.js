import ref from './ref';
import { todoData } from './modal';

ref.todoList.addEventListener('click', onRemoveItem);

function onRemoveItem(e) {
  console.log(todoData.getTodoData());
  const currentActiveIcon = e.target.dataset.action;
  const pathItem = e.composedPath();
  const currentId = pathItem[4].id;

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

console.log(todoData.getCurrentCalendarData());
console.log(todoData.getCurrentTime());
