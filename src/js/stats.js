import refs from './refs';
import { todoData } from './todo-modal';

const todo = todoData.getTodoData();
const done = todoData.getDoneList();

let stateStats = [
  {
    name: 'goals',
    active: 0,
    archived: 0,
    done: 0,
  },
  {
    name: 'new feature',
    active: 0,
    archived: 0,
    done: 0,
  },
  {
    name: 'remind',
    active: 0,
    archived: 0,
    done: 0,
  },
  {
    name: 'shopping list',
    active: 0,
    archived: 0,
    done: 0,
  },
];

getStats();

function getStats() {
  getActiveTodoItems(todo);
  getDoneTodoItems(done);
  const markup = todoData.makerStatsMarkup(stateStats);
  refs.statsList.innerHTML = '';
  refs.statsList.insertAdjacentHTML('beforeend', markup);
}

function getActiveTodoItems(todoList) {
  const activeCategory = subtractionQuantityCategory(todoList);
  saveActiveItems(activeCategory);
}

function getDoneTodoItems(doneList) {
  const doneCategory = subtractionQuantityCategory(doneList);
  saveDoneItems(doneCategory);
}

function subtractionQuantityCategory(todoList) {
  const data = todoList.map(item => item.category);
  const subtractedCategory = data.reduce(getStatsFromObj, {});
  return subtractedCategory;
}

function getStatsFromObj(acc, item) {
  if (!acc.hasOwnProperty(item)) {
    acc[item] = 0;
  }

  acc[item] += 1;

  return acc;
}

function saveActiveItems(obj) {
  for (const key in obj) {
    for (const item of stateStats) {
      if (item.name === key) {
        item.active = obj[key];
      }
    }
  }
}

function saveDoneItems(obj) {
  for (const key in obj) {
    for (const item of stateStats) {
      if (item.name === key) {
        item.done = obj[key];
      }
    }
  }
}

export { getStats };
