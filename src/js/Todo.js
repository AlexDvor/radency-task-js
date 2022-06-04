import refs from './refs';
import { handleParseToDo, handleParseStats } from './handlebars';

export default class Todo {
  constructor() {
    this.todoData = [];
    this.doneList = [];
    this.archiveList = [];
  }

  // todo

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
  }

  removeTodoItemById(id, nameStor) {
    const filteredData = this.getTodoData().filter(item => item.id !== id);
    const todoItem = this.makerTodoItem(filteredData);
    this.setTodoData(filteredData);
    this.setLocalStorage(filteredData, nameStor);
    refs.todoList.innerHTML = '';
    refs.todoList.insertAdjacentHTML('beforeend', todoItem);
  }

  editTodoItem(todo) {
    const indexEl = this.getTodoIndex(todo);
    const itemToDo = this.getTodoData().find(item => item.id === todo.id);
    const todoData = this.getTodoData();
    todoData.splice(indexEl, 1, { ...itemToDo, ...todo });
    const todoItem = this.makerTodoItem(todoData);
    this.setTodoData(todoData);
    this.setLocalStorage(todoData, 'todo');
    refs.todoList.innerHTML = '';
    refs.todoList.insertAdjacentHTML('beforeend', todoItem);
  }

  updateTodoListBody(item) {
    const todoItem = this.makerTodoItem(item);
    refs.todoList.insertAdjacentHTML('afterbegin', todoItem);
  }

  makerTodoItem(data) {
    return handleParseToDo(data);
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

  getTodoDataFromLocalStorage() {
    const todoData = this.getLocalStorage('todo');
    const doneData = this.getLocalStorage('done');
    const archivedData = this.getLocalStorage('archived');

    if (todoData.length > 0 || doneData.length > 0 || archivedData.length > 0) {
      const dataList = this.makerTodoItem(todoData);
      refs.todoList.insertAdjacentHTML('beforeend', dataList);
      this.setDoneList(doneData);
      this.setTodoData(todoData);
      this.setArchiveList(archivedData);
    } else {
      return;
    }
  }

  // stats-doneList

  getDoneList() {
    return this.doneList;
  }

  setDoneList(newData) {
    this.doneList = newData;
  }

  relocateTodoItemToDoneList(id) {
    const todoItem = this.getTodoData().find(item => item.id === id);
    this.doneList.unshift(todoItem);
    this.removeTodoItemById(id, 'todo');
    this.setLocalStorage(todoItem, 'done');
    return todoItem;
  }

  makerStatsMarkup(data) {
    return handleParseStats(data);
  }

  // stats-archiveData

  getArchiveList() {
    return this.archiveList;
  }

  setArchiveList(newData) {
    this.archiveList = newData;
  }

  relocateTodoItemToArchiveList(id) {
    const todoItem = this.getTodoData().find(item => item.id === id);
    this.archiveList.unshift(todoItem);
    this.removeTodoItemById(id, 'todo');
    this.setLocalStorage(todoItem, 'archived');
    return todoItem;
  }

  //common

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
}
