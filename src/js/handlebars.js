import Handlebars from 'handlebars';
import toDoTemplate from './templates/todo-template';
import countTemplate from './templates/stats-template';

Handlebars.registerHelper('getImage', getImageIcon);
Handlebars.registerHelper('parseContent', parseContent);
Handlebars.registerHelper('parseCategory', parseCategory);
Handlebars.registerHelper('parseModifyData', parseModifyData);

const templateTodo = Handlebars.compile(toDoTemplate());
const templateStatsItem = Handlebars.compile(countTemplate());

function getImageIcon(string) {
  const value = string.toLowerCase();
  switch (value) {
    case 'shopping list':
      return new Handlebars.SafeString(`<i class="fa-solid fa-cart-shopping"></i>`);

    case 'new feature':
      return new Handlebars.SafeString('<i class="fa-solid fa-calendar-plus"></i>');

    case 'remind':
      return new Handlebars.SafeString('<i class="fa-solid fa-bell"></i>');

    case 'goals':
      return new Handlebars.SafeString('<i class="fa-solid fa-bullseye"></i>');
  }
}

function parseContent(content) {
  const stringArray = content.split(' ');
  const result = lineSeparator(stringArray);
  return result;
}

function parseCategory(category) {
  const stringLowerCase = category.toLowerCase();
  const stringArray = stringLowerCase.split(' ').map(item => item[0].toUpperCase() + item.slice(1));
  const result = stringArray.join(' ');
  return result;
}

function parseModifyData(changedData) {
  return changedData ?? '---';
}

function lineSeparator(arr) {
  if (arr.length > 1) {
    return `${arr[0]} ${arr[1]}...`;
  } else {
    return `${arr[0]}`;
  }
}

function handleParseToDo(data) {
  if (Array.isArray(data)) {
    return data.map(item => templateTodo(item)).join('');
  }
  if (typeof data === 'object') {
    return templateTodo(data);
  }
}

function handleParseStats(data) {
  if (Array.isArray(data)) {
    return data.map(item => templateStatsItem(item)).join('');
  }
  if (typeof data === 'object') {
    return templateStatsItem(data);
  }
}

export { handleParseToDo, parseCategory, handleParseStats };
