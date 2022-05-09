import ref from './ref';
import todoItemTpl from '../templates/todo-item.hbs';
import todoItemsTpl from '../templates/todo-items.hbs';

export default class TodoItems {
  constructor() {
    this.todoData = [];
  }

  getTodoData() {
    return this.todoData;
  }

  setTodoData(newData) {
    this.todoData = newData;
  }

  addTodoItem(item) {
    this.todoData.push(item);
    this.setLocalStorage(item);
    this.updateTodoListBody(item);
  }

  removeTodoItemById(id) {
    const filteredData = this.getTodoData().filter(item => item.id !== id);
    const todoItem = this.makerItemsCards(filteredData);
    this.setTodoData(filteredData);
    this.setLocalStorage(filteredData);
    ref.todoList.innerHTML = '';
    ref.todoList.insertAdjacentHTML('beforeend', todoItem);
  }

  updateTodoListBody(item) {
    const todoItem = this.makerItemCard(item);
    ref.todoList.insertAdjacentHTML('beforeend', todoItem);
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

  setLocalStorage(data) {
    if (typeof data === 'object') {
      const currentData = this.getLocalStorage();
      currentData.push(data);
      localStorage.setItem('todo', JSON.stringify(currentData));
    }
    if (Array.isArray(data)) {
      localStorage.setItem('todo', JSON.stringify(data));
    }
  }

  getTodoListFromLocalStorage() {
    const data = this.getLocalStorage();
    if (data.length > 0) {
      const dataList = this.makerItemsCards(data);
      ref.todoList.insertAdjacentHTML('beforeend', dataList);
      this.setTodoData(data);
    } else {
      return;
    }
  }
}
