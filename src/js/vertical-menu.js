import refs from './refs';
import ConfirmModal from './confirm-modal';
import { todoData } from './todo-modal';

const confirmModal = new ConfirmModal();

checkingForDisabledBtn();

refs.removeAllBtn.addEventListener('click', onClickRemove);

function onClickRemove() {
  confirmModal.openModal();
}

function checkingForDisabledBtn() {
  const data = todoData.isEmptyData();
  if (!data) {
    refs.removeAllBtn.disabled = true;
    return;
  }
  refs.removeAllBtn.disabled = false;
}

export { checkingForDisabledBtn };
