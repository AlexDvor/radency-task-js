import ref from './ref';

ref.creatButtonItem.addEventListener('click', openCreateModal);
ref.exitIcon.addEventListener('click', onCloseModal);
ref.overlay.addEventListener('click', onBackdropClick);
ref.selectOptions.addEventListener('click', onClickSelectOptions);
ref.selectContent.addEventListener('click', onClickSelectContent);
ref.form.addEventListener('submit', onFormSubmit);

function openCreateModal(e) {
  window.addEventListener('keydown', onKeyDownClick);
  ref.modal.classList.add('lightbox--open');
}

function onCloseModal(e) {
  window.removeEventListener('keydown', onKeyDownClick);
  ref.modal.classList.remove('lightbox--open');
  resetSelect();
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

function resetSelect() {
  const defaultValue = ref.selectOptions.children[0].textContent;
  ref.selectContent.textContent = defaultValue;
}

function onClickSelectOptions(e) {
  const selectValue = e.target.textContent;
  const iconRef = e.target.children[0].lastElementChild.className;
  const wrapperIcon = `<span class="select-options__icon"> <i class='${iconRef}'></i></span >`;
  ref.selectContent.textContent = selectValue;
  // console.log('selectValue', selectValue);
  // e.path[3].elements[0].value = '1111';
  console.log(e.path[3].elements[0].value);
  ref.selectContent.insertAdjacentHTML('afterBegin', wrapperIcon);
  ref.selectContent.classList.toggle('active');
  ref.selectOptions.classList.toggle('select-options--open');
}

function onClickSelectContent() {
  ref.selectContent.classList.toggle('active');
  ref.selectOptions.classList.toggle('select-options--open');
}

function onFormSubmit(e) {
  e.preventDefault();
  const data = {};
  // console.dir(e.currentTarget.elements.select.value);
  const formData = new FormData(e.currentTarget);
  formData.forEach((value, key) => {
    data[key] = value;
  });
  console.log('data', data);
}
// --------------------------------------------------------------
// const formRef = ref.form.querySelectorAll('select');

// createSelectList(formRef);

// function createSelectList(nodeList) {
//   nodeList.forEach(element => {
//     const selectWrapperElement = document.createElement('div');
//     selectWrapperElement.classList.add('select');

//     const wrapElement = document.createElement('div');
//     wrapElement.classList.add('select-styled');
//     wrapElement.textContent = `${element.children[0].textContent}`;

//     const listElement = document.createElement('ul');
//     listElement.classList.add('select-options');

//     selectWrapperElement.append(element, wrapElement, listElement);

//     element.classList.add('select-hidden');
//     ref.form.append(selectWrapperElement);

//     for (let i = 0; i < element.children.length; i++) {
//       const itemEl = document.createElement('li');
//       itemEl.textContent = element.children[i].textContent;
//       itemEl.setAttribute('rel', `${element.children[i].value}`);
//       listElement.append(itemEl);
//     }
//   });
// }

// const selectStyledRef = document.querySelectorAll('.select-styled');

// selectStyledRef.forEach(element =>
//   element.addEventListener('click', e => {
//     selectStyledRef.forEach(item => {
//       if (item.nextElementSibling.classList.contains('select-options--open')) {
//         item.nextElementSibling.classList.remove('select-options--open');
//       }
//       if (item.classList.contains('active')) {
//         item.classList.remove('active');
//       }
//     });
//     element.classList.toggle('active');
//     element.nextElementSibling.classList.toggle('select-options--open');
//   }),
// );

// const selectOptionsRef = document.querySelectorAll('.select-options');

// selectOptionsRef.forEach(element =>
//   element.addEventListener('click', e => {
//     const value = e.target.textContent;
//     e.path[2].children[1].textContent = value;
//     e.path[2].children[1].classList.remove('active');
//     e.path[2].children[2].classList.remove('select-options--open');
//   }),
// );

// --------------------------------------------------------------
// const selectStyledRef = document.querySelector('.select-styled');
// const selectOptionsRef = document.querySelector('.select-options');

// selectStyledRef.addEventListener('click', () => {
//   selectOptionsRef.classList.toggle('select-options--open');
//   selectStyledRef.classList.toggle('active');
// });

// selectOptionsRef.addEventListener('click', e => {
//   selectStyledRef.textContent = e.target.textContent;
//   selectStyledRef.classList.toggle('active');
//   selectOptionsRef.classList.toggle('select-options--open');
// });
