import refs from './refs';
import { handleParseToDo } from './handlebars';

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
    this.todoData.unshift(item);
    this.setLocalStorage(item);
    this.updateTodoListBody(item);
    console.log(this.todoData);
  }

  removeTodoItemById(id) {
    const filteredData = this.getTodoData().filter(item => item.id !== id);
    const todoItem = this.makerCard(filteredData);
    this.setTodoData(filteredData);
    this.setLocalStorage(filteredData);
    refs.todoList.innerHTML = '';
    refs.todoList.insertAdjacentHTML('beforeend', todoItem);
  }

  updateTodoListBody(item) {
    const todoItem = this.makerCard(item);
    refs.todoList.insertAdjacentHTML('afterbegin', todoItem);
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
      currentData.unshift(data);
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
      refs.todoList.insertAdjacentHTML('beforeend', dataList);
      this.setTodoData(data);
    } else {
      return;
    }
  }

  editTodoItem(todo) {
    const todoData = this.getTodoData().filter(item => item.id !== todo.id);
    todoData.push(todo);
    const todoItem = this.makerCard(todoData);
    this.setTodoData(todoData);
    this.setLocalStorage(todoData);
    refs.todoList.innerHTML = '';
    refs.todoList.insertAdjacentHTML('beforeend', todoItem);
  }
}
