import { todoData } from './todo-modal';
import refs from './refs';

createStatsItem();

function createStatsItem() {
  const data = todoData.getTodoData();
  if (data.length > 0) {
    todoData.getActiveStats();
  }
  return;
}

// function getStatsFromObj(acc, item) {
//   if (!acc.hasOwnProperty(item)) {
//     acc[item] = 0;
//   }

//   acc[item] += 1;

//   return acc;
// }

// function createActiveStatsDataArray(obj) {
//   const data = [];
//   for (const key in obj) {
//     data.push({
//       name: key,
//       active: obj[key],
//       archived: 0,
//       done: 0,
//     });
//   }
//   console.log('🚀 - data', data);

//   return data;
// }
