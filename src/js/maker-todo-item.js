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
    this.updateTodoListInterface(item);
  }

  removeTodoItemById(id) {
    const filteredData = this.todoData.filter(item => item.id !== id);
    this.setTodoData(filteredData);
  }

  updateTodoListInterface(item) {
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

  setLocalStorage(obj) {
    const currentData = this.getLocalStorage();
    currentData.push(obj);
    localStorage.setItem('todo', JSON.stringify(currentData));
  }

  getTodoListFromLS() {
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
