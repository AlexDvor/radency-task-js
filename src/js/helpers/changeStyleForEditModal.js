import { parseCategory } from '../handlebars';
import getIconRef from '../helpers/getIconRef';
import refs from '../refs';

export default function changeStyleForEditModal({ category }) {
  const iconRef = getIconRef(category);
  const wrapperIcon = `<span class="select-options__icon"> <i class='${iconRef}'></i></span >`;
  refs.selectContent.textContent = parseCategory(category);
  refs.selectContent.insertAdjacentHTML('afterBegin', wrapperIcon);
  refs.confirmModalButton.textContent = 'Confirm';
  refs.confirmModalButton.dataset.button = 'confirm';
  refs.titleModal.textContent = 'Edit To Do';
}
