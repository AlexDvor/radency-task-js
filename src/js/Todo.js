import ref from './ref';
import handleParseToDo from './handlebars';

export default class Todo {
  constructor() {
    this.todoData = [];
    this.archiveData = [];
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
    const todoItem = this.makerCard(filteredData);
    this.setTodoData(filteredData);
    this.setLocalStorage(filteredData);
    ref.todoList.innerHTML = '';
    ref.todoList.insertAdjacentHTML('beforeend', todoItem);
  }

  updateTodoListBody(item) {
    const todoItem = this.makerCard(item);
    ref.todoList.insertAdjacentHTML('beforeend', todoItem);
  }

  makerCard(data) {
    return handleParseToDo(data);
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
      const dataList = this.makerCard(data);
      ref.todoList.insertAdjacentHTML('beforeend', dataList);
      this.setTodoData(data);
    } else {
      return;
    }
  }
}
