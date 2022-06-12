import refs from './refs';
import ConfirmModal from './confirm-modal';

const confirmModal = new ConfirmModal();

refs.removeAllBtn.addEventListener('click', onClickRemove);

function onClickRemove() {
  confirmModal.openModal();
}
