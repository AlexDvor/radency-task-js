import refs from './refs';
import { v4 as uuidv4 } from 'uuid';
import validateForm from './helpers/validate-form';
import getCurrentCalendarData from './helpers/calendar-data';
import getCurrentTime from './helpers/current-time';

export default class Modal {
  constructor() {
    this.id = '';
  }

  getId() {
    return this.id;
  }

  setId(newId) {
    this.id = newId;
  }

  openModal() {
    window.addEventListener('keydown', event => this.onKeyDownClick(event));
    refs.modal.classList.add('lightbox--open');
  }

  closeModal() {
    window.removeEventListener('keydown', event => this.onKeyDownClick(event));
    refs.modal.classList.remove('lightbox--open');
    this.resetForm();
  }

  onKeyDownClick(event) {
    if (event.code === 'Escape') {
      this.closeModal();
    }
  }

  backdropClick(event) {
    if (event.currentTarget === event.target) {
      this.closeModal();
    }
  }

  resetForm() {
    const defaultValue = refs.selectOptions.children[0].textContent;
    refs.selectContent.textContent = defaultValue;
    refs.selectOptions.classList.remove('select-options--open');
    refs.selectContent.classList.remove('is-empty');
    refs.form.elements.category.classList.remove('is-empty');
    refs.form.elements.content.classList.remove('is-empty');
    refs.form.reset();
  }

  formSubmit(e) {
    e.preventDefault();
    const formData = e.currentTarget.elements;
    const category = formData.category.value;
    const content = formData.content.value;
    const objective = formData.objective.value;
    const changedTodoId = this.getId();
    const currentData = getCurrentCalendarData();
    const currentTime = getCurrentTime();
    const id = uuidv4().slice(0, 6);
    const isValidForm = validateForm(formData);
    const todoData = { id, category, content, objective, currentData, currentTime };
    const changedData = { changedTodoId, category, content, currentData, currentTime };
    const typeBtn = refs.confirmModalButton.dataset.button;
    console.log('🚀 - typeBtn', typeBtn);

    if (isValidForm && typeBtn === 'create') {
      this.closeModal();
      this.resetForm();
      return todoData;
    }

    if (isValidForm && typeBtn === 'confirm') {
      return changedData;
    }

    return false;
  }
}
