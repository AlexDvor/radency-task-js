import refs from './refs';
import { todoData } from './todo-modal';
import { resetStatsValue } from './stats';

refs.removeAllBtn.addEventListener('click', onClickRemove);

function onClickRemove() {
  todoData.removeAllTodoData();
  resetStatsValue();
}
