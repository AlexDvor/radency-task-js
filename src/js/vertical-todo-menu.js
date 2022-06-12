import refs from './refs';
import ConfirmModal from './confirmModal';

const confirmModal = new ConfirmModal();

refs.removeAllBtn.addEventListener('click', onClickRemove);

function onClickRemove() {
  confirmModal.openModal();
}
