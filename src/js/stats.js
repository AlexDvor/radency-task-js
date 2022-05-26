import { todoData } from './todo-modal';
import refs from './refs';

todoData.getDoneListFromLocalStorage();

createStatsItem();

function createStatsItem() {
  const data = todoData.getTodoData().map(item => item.category);
  const allCategory = data.reduce(getStats, {});
  const statsList = createStatsDataArray(allCategory);
  const markupStats = todoData.makerStatsItem(statsList);
  refs.statsList.insertAdjacentHTML('afterbegin', markupStats);
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
  console.log('🚀 - data', data);

  return data;
}
