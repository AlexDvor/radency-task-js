import refs from './refs';
import { handleParseToDo } from './handlebars';

export default class Todo {
  constructor() {
    this.todoData = [];
    this.archiveData = [];
    this.doneList = [];
  }

  getTodoData() {
    return this.todoData;
  }

  setTodoData(newData) {
    this.todoData = newData;
  }

  addTodoItem(item) {
    this.todoData.unshift(item);
    this.setLocalStorage(item, 'todo');
    this.updateTodoListBody(item);
    console.log(this.todoData);
  }

  removeTodoItemById(id, nameStor) {
    const filteredData = this.getTodoData().filter(item => item.id !== id);
    const todoItem = this.makerCard(filteredData);
    this.setTodoData(filteredData);
    this.setLocalStorage(filteredData, nameStor);
    refs.todoList.innerHTML = '';
    refs.todoList.insertAdjacentHTML('beforeend', todoItem);
  }

  updateTodoListBody(item) {
    const todoItem = this.makerCard(item);
    refs.todoList.insertAdjacentHTML('afterbegin', todoItem);
  }

  addTodoItemToDoneList(id) {
    const todoItem = this.getTodoData().find(item => item.id === id);
    this.doneList.unshift(todoItem);
    this.removeTodoItemById(id, 'todo');
    this.setLocalStorage(todoItem, 'done');
  }

  makerCard(data) {
    return handleParseToDo(data);
  }

  getLocalStorage(nameStor) {
    const savedTodoList = localStorage.getItem(nameStor);
    const result = savedTodoList ? JSON.parse(savedTodoList) : new Array();
    return result;
  }

  setLocalStorage(data, nameStor) {
    if (typeof data === 'object') {
      const currentData = this.getLocalStorage(nameStor);
      currentData.unshift(data);
      localStorage.setItem(nameStor, JSON.stringify(currentData));
    }
    if (Array.isArray(data)) {
      localStorage.setItem(nameStor, JSON.stringify(data));
    }
  }

  getTodoListFromLocalStorage() {
    const data = this.getLocalStorage('todo');
    if (data.length > 0) {
      const dataList = this.makerCard(data);
      refs.todoList.insertAdjacentHTML('beforeend', dataList);
      this.setTodoData(data);
    } else {
      return;
    }
  }

  getTodoIndex({ id }) {
    let indexElement;
    this.getTodoData().find((item, index) => {
      if (item.id === id) {
        indexElement = index;
        return indexElement;
      }
    });
  }

  editTodoItem(todo) {
    const indexEl = this.getTodoIndex(todo);
    const itemToDo = this.getTodoData().find(item => item.id === todo.id);
    const todoData = this.getTodoData();
    todoData.splice(indexEl, 1, { ...itemToDo, ...todo });
    const todoItem = this.makerCard(todoData);
    this.setTodoData(todoData);
    this.setLocalStorage(todoData, 'todo');
    refs.todoList.innerHTML = '';
    refs.todoList.insertAdjacentHTML('beforeend', todoItem);
  }
}
