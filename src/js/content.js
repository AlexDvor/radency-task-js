import ref from './ref';
import { todoData } from './modal';

ref.todoList.addEventListener('click', onRemoveItem);

function onRemoveItem(e) {
  const currentId = e.target;
  console.log('🚀 - currentId', currentId);
  todoData.removeTodoItemById(currentId);
}
