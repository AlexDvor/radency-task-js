import { todoData } from './todo-modal';
import refs from './refs';

todoData.getDoneListFromLocalStorage();

createCountItem();

function createCountItem() {
  const todo = todoData.getTodoData();
  const allCategory = todo.map(item => item.category);
  const result = allCategory.reduce(getStats, {});
  return result;
  //   {
  //     "goals": 3,
  //     "shopping list": 2,
  //     "new feature": 2,
  //     "remind": 1
  // }
}

function getStats(acc, item) {
  if (!acc.hasOwnProperty(item)) {
    acc[item] = 0;
  }

  acc[item] += 1;

  return acc;
}
