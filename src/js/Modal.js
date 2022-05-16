import refs from './refs';

export default class Modal {
  onOpenModal() {
    window.addEventListener('keydown', event => this.onKeyDownClick(event));
    refs.modal.classList.add('lightbox--open');
  }

  onCloseModal() {
    window.removeEventListener('keydown', event => this.onKeyDownClick(event));
    refs.modal.classList.remove('lightbox--open');
    this.resetForm();
  }

  onKeyDownClick(event) {
    if (event.code === 'Escape') {
      this.onCloseModal();
    }
  }

  onBackdropClick(event) {
    if (event.currentTarget === event.target) {
      this.onCloseModal();
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
}
