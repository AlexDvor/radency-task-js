import refs from './refs';
import tippy from 'tippy.js';

const tooltipParams = {
  delay: [500, 200],
  animation: 'scale',
  theme: 'light',
};

export default function activateTooltips() {
  tippy('#doneBtn', {
    content: 'Done',
    ...tooltipParams,
  });

  tippy('#editBtn', {
    content: 'Edit',
    ...tooltipParams,
  });

  tippy('#archiveBtn', {
    content: 'Archive',
    ...tooltipParams,
  });

  tippy('#removeBtn', {
    content: 'Delete',
    ...tooltipParams,
  });

  tippy(refs.creatButtonItem, {
    content: 'Add todo',
    ...tooltipParams,
  });

  tippy('#removeAllBtn', {
    content: 'Delete All',
    placement: 'left',
    ...tooltipParams,
  });
}
