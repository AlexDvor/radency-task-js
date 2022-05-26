import { todoData } from './todo-modal';
import refs from './refs';

todoData.getDoneListFromLocalStorage();

createStatsItem();

function createStatsItem() {
  const allCategory = todoData.getTodoData().map(item => item.category);
  const result = allCategory.reduce(getStats, {});
  return createStatsDataArray(result);
}

function getStats(acc, item) {
  if (!acc.hasOwnProperty(item)) {
    acc[item] = 0;
  }

  acc[item] += 1;

  return acc;
}

function createStatsDataArray(obj) {
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
