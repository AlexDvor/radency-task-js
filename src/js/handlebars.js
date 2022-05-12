import Handlebars from 'handlebars';
import toDoTemplate from './helpers/templates';

Handlebars.registerHelper('getImage', getImageIcon);

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

export default function handleParseToDo(data) {
  if (Array.isArray(data)) {
    return data.map(item => template(item)).join('');
  }
  if (typeof data === 'object') {
    return template(data);
  }
}
