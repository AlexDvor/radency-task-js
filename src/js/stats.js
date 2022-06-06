import refs from './refs';
import { todoData } from './todo-modal';

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
  getActiveTodoItems(todoData.getTodoData());
  getDoneTodoItems(todoData.getDoneList());
  getArchivedTodoItems(todoData.getArchiveList());
  createMarkupStats(stateStats);
}

function updateDoneItem(todoItem) {
  const { category } = todoItem;
  stateStats.forEach(item => {
    if (item.name === category) {
      if (item.active === 0) {
        return;
      } else {
        item.active -= 1;
        item.done += 1;
      }
    }
  });

  createMarkupStats(stateStats);
}

function updateStatsActiveItem(todoItem) {
  const { category } = todoItem;
  stateStats.forEach(item => {
    if (item.name === category) {
      if (item.active === 0) {
        return;
      } else {
        item.active -= 1;
      }
    }
  });

  createMarkupStats(stateStats);
  console.log('🚀POSLE - stateStats', stateStats);
}

function updateArchivedItem(todoItem) {
  const { category } = todoItem;
  stateStats.map(item => {
    if (item.name === category) {
      if (item.active === 0) {
        return;
      } else {
        item.active -= 1;
        item.archived += 1;
      }
    }
  });

  createMarkupStats(stateStats);
}

function getActiveTodoItems(todoList) {
  const activeCategory = subtractionQuantityCategory(todoList);
  saveActiveItems(activeCategory);
}

function getDoneTodoItems(doneList) {
  const doneCategory = subtractionQuantityCategory(doneList);
  saveDoneItems(doneCategory);
}

function getArchivedTodoItems(archivedList) {
  const archivedCategory = subtractionQuantityCategory(archivedList);
  saveArchivedItems(archivedCategory);
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

function saveArchivedItems(obj) {
  for (const key in obj) {
    for (const item of stateStats) {
      if (item.name === key) {
        item.archived = obj[key];
      }
    }
  }
}

function createMarkupStats(state) {
  const markup = todoData.makerStatsMarkup(state);
  refs.statsList.innerHTML = '';
  refs.statsList.insertAdjacentHTML('beforeend', markup);
}

export { updateDoneItem, updateArchivedItem, updateStatsActiveItem, getStats };
