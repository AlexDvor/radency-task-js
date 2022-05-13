import Handlebars from 'handlebars';
import toDoTemplate from './helpers/templates';

Handlebars.registerHelper('getImage', getImageIcon);
Handlebars.registerHelper('parseContent', parseContent);
Handlebars.registerHelper('parseCategory', parseCategory);

const template = Handlebars.compile(toDoTemplate());

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
  const result = lineSeparator(stringArray);
  return result;
}

function lineSeparator(arr) {
  if (arr.length > 1) {
    return `${arr[0]} ${arr[1]}`;
  } else {
    return `${arr[0]}`;
  }
}

export default function handleParseToDo(data) {
  if (Array.isArray(data)) {
    return data.map(item => template(item)).join('');
  }
  if (typeof data === 'object') {
    return template(data);
  }
}
