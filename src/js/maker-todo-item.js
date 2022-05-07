import todoItemTpl from '../templates/todo-item.hbs';
import todoItemsTpl from '../templates/todo-items.hbs';

const todoList = document.querySelector('.todo-list');

export default class TodoItems {
  constructor(item) {
    this.todoData = [];
    this.todoItem = item;
  }

  getTodoData() {
    return this.todoData;
  }

  addTodoItem(item) {
    this.todoData.push(item);
    this.setLocalStorage(item);
    this.updateTodoListInterface(item);
  }

  updateTodoListInterface(item) {
    const todoItem = this.makerItemCard(item);
    todoList.insertAdjacentHTML('beforeend', todoItem);
  }

  makerItemCard(obj) {
    return todoItemTpl(obj);
  }

  makerItemsCards(arr) {
    return todoItemsTpl(arr);
  }

  getLocalStorage() {
    const savedTodoList = localStorage.getItem('todo');
    const result = savedTodoList ? JSON.parse(savedTodoList) : new Array();
    return result;
  }

  setLocalStorage(obj) {
    const currentData = this.getLocalStorage();
    currentData.push(obj);
    localStorage.setItem('todo', JSON.stringify(currentData));
  }

  getTodoListFromLS() {
    const data = this.getLocalStorage();
    if (data.length > 0) {
      const dataList = this.makerItemsCards(data);
      todoList.insertAdjacentHTML('beforeend', dataList);
    } else {
      return;
    }
  }
}
