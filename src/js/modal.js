import ref from './ref';

ref.creatButtonItem.addEventListener('click', createCardItem);
ref.exitIcon.addEventListener('click', onCloseModal);
ref.overlay.addEventListener('click', onBackdropClick);
ref.modal.addEventListener('click', onBackdropClick);

function createCardItem(e) {
  ref.modal.classList.add('is-open');
}

function onCloseModal(e) {
  window.removeEventListener('keydown', onKeyDownClick);
  ref.modal.classList.remove('is-open');
}

function onKeyDownClick(e) {
  if (e.code === 'Escape') {
    onCloseModal();
  }
}

function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    onCloseModal();
  }
}

const formRef = ref.form.querySelectorAll('select');

createSelectList(formRef);

function createSelectList(nodeList) {
  nodeList.forEach(element => {
    const selectWrapperElement = document.createElement('div');
    selectWrapperElement.classList.add('select');

    const wrapElement = document.createElement('div');
    wrapElement.classList.add('select-styled');
    wrapElement.textContent = `${element.children[0].textContent}`;

    const listElement = document.createElement('ul');
    listElement.classList.add('select-options');

    selectWrapperElement.append(element, wrapElement, listElement);

    element.classList.add('select-hidden');
    ref.form.append(selectWrapperElement);

    for (let i = 0; i < element.children.length; i++) {
      const itemEl = document.createElement('li');
      itemEl.textContent = element.children[i].textContent;
      itemEl.setAttribute('rel', `${element.children[i].value}`);
      listElement.append(itemEl);
    }
  });
}

const selectStyledRef = document.querySelectorAll('.select-styled');

selectStyledRef.forEach(element =>
  element.addEventListener('click', e => {
    selectStyledRef.forEach(item => {
      if (item.nextElementSibling.classList.contains('js-open-list')) {
        item.nextElementSibling.classList.remove('js-open-list');
      }
      if (item.classList.contains('active')) {
        item.classList.remove('active');
      }
    });
    element.classList.toggle('active');
    element.nextElementSibling.classList.toggle('js-open-list');
  }),
);

const selectOptionsRef = document.querySelectorAll('.select-options');

selectOptionsRef.forEach(element =>
  element.addEventListener('click', e => {
    const value = e.target.textContent;
    e.path[2].children[1].textContent = value;
    e.path[2].children[1].classList.remove('active');
    e.path[2].children[2].classList.remove('js-open-list');
  }),
);

// const selectStyledRef = document.querySelector('.select-styled');
// const selectOptionsRef = document.querySelector('.select-options');

// selectStyledRef.addEventListener('click', () => {
//   selectOptionsRef.classList.toggle('js-open-list');
//   selectStyledRef.classList.toggle('active');
// });

// selectOptionsRef.addEventListener('click', e => {
//   selectStyledRef.textContent = e.target.textContent;
//   selectStyledRef.classList.toggle('active');
//   selectOptionsRef.classList.toggle('js-open-list');
// });
