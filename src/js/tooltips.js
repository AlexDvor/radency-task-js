import refs from './refs';
import tippy from 'tippy.js';
import { tooltipParams } from './helpers/tooltip-params';

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
}
