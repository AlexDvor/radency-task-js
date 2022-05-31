import refs from './refs';
import { todoData } from './todo-modal';

const todo = todoData.getTodoData();
const done = todoData.getDoneList();

let stateStats = {};

getActiveTodoItems(todo);
getDoneTodoItems(done);

function getActiveTodoItems(todoList) {
  const activeCategory = subtractionQuantityCategory(todoList);
  const activeList = parseActiveTodo(activeCategory);
  console.log('🚀 - activeList', activeList);
  stateStats = activeList;
  // for (const key in activeCategory) {
  //   console.log(`${key}: ${activeCategory[key].active}`);
  // }

  //   {
  //     "shopping list": {
  //         "active": 2,
  //         "archived": 0,
  //         "done": 0
  //     },
  //     "new feature": {
  //         "active": 1,
  //         "archived": 0,
  //         "done": 0
  //     },
  //     "remind": {
  //         "active": 1,
  //         "archived": 0,
  //         "done": 0
  //     },
  //     "goals": {
  //         "active": 1,
  //         "archived": 0,
  //         "done": 0
  //     }
  // }
}

function getDoneTodoItems(todoList) {
  const doneCategory = subtractionQuantityCategory(todoList);
  const doneList = parseDoneTodo(doneCategory);
  console.log('🚀 - doneList', doneList);
}

//
//
//
//

//
//
//
//
//

//

//-----------------------------------------------------------

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

function parseActiveTodo(obj) {
  let todo = [];
  for (const key in obj) {
    todo.push({ name: key, active: obj[key], archived: 0, done: 0 });
  }
  return todo;
}

function parseDoneTodo(obj) {
  let todo = [];
  for (const key in obj) {
    todo.push({ name: key, done: obj[key] });
  }
  return todo;
}

