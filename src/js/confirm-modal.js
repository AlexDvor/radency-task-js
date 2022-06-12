import refs from './refs';
import { todoData } from './todo-modal';
import { resetStatsValue } from './stats';

export default class ConfirmModal {
  constructor() {}

  openModal() {
    window.addEventListener('keydown', event => this.onKeyDownClick(event));
    refs.confirmBtn.addEventListener('click', event => this.onConfirmOperation(event));
    refs.cancelBtn.addEventListener('click', event => this.onCancelOperation(event));
    refs.confirmationModal.classList.add('modal-box--open');
  }

  closeModal() {
    window.removeEventListener('keydown', event => this.onKeyDownClick(event));
    refs.confirmationModal.classList.remove('modal-box--open');
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

  onConfirmOperation(event) {
    todoData.removeAllTodoData();
    resetStatsValue();
    this.closeModal();
  }

  onCancelOperation(event) {
    this.closeModal();
  }
}
