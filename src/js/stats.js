import refs from './refs';
import { todoData } from './todo-modal';

getStats();

function getStats() {
  const data = todoData.getTodoData();
  if (data.length > 0) {
    getActiveTodoItems(data);
  }
  return;
}

function getActiveTodoItems(todo) {
  const data = todo.map(item => item.category);
  const allCategory = data.reduce(getStatsFromObj, {});
  const statsList = createActiveStatsDataArray(allCategory);
  const markupActiveStats = todoData.makerStatsItem(statsList);
  refs.statsList.innerHTML = '';
  refs.statsList.insertAdjacentHTML('afterbegin', markupActiveStats);
}

function getStatsFromObj(acc, item) {
  if (!acc.hasOwnProperty(item)) {
    acc[item] = 0;
  }

  acc[item] += 1;

  return acc;
}

function createActiveStatsDataArray(obj) {
  const data = [];
  for (const key in obj) {
    data.push({
      name: key,
      active: obj[key],
      archived: 0,
      done: 0,
    });
  }

  return data;
}

export { getStats };
