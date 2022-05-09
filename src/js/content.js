import ref from './ref';
// import TodoItems from './maker-todo-item';
import { todoData } from './modal';

ref.todoList.addEventListener('click', onRemoveItem);

function onRemoveItem(e) {
  const currentId = e.target.id;
  todoData.removeTodoItemById(currentId);
}
