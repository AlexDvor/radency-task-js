const creatButtonItemRef = document.querySelector('[data-action="create-item"]');
const modalRef = document.querySelector('.lightbox');
const exitIcon = document.querySelector('.lightbox-conten___icon-exit');
const overlayRef = document.querySelector('.lightbox-content');
//
const selectRef = document.getElementById('mounth');
const formRef = document.querySelector('.form');

creatButtonItemRef.addEventListener('click', createCardItem);
exitIcon.addEventListener('click', onCloseModal);
overlayRef.addEventListener('click', onBackdropClick);
modalRef.addEventListener('click', onBackdropClick);

function createCardItem(e) {
  modalRef.classList.add('is-open');
}

function onCloseModal(e) {
  window.removeEventListener('keydown', onKeyDownClick);
  modalRef.classList.remove('is-open');
  // changesAttributeImage('', '');
}

function onKeyDownClick(e) {
  if (e.code === 'Escape') {
    onCloseModal();
  }
}

function onBackdropClick(e) {
  // console.log('e.currentTarget', e);
  // console.log('e.target', e.target);
  // if (e.currentTarget === e.target) {
  //   onCloseModal();
  // }
}

//////////////////////////////////////////////

const selectWrapperElement = document.createElement('div');
selectWrapperElement.classList.add('select');

const wrapElement = document.createElement('div');
wrapElement.classList.add('select-styled');
wrapElement.textContent = `${selectRef.children[0].textContent}`;

const listElement = document.createElement('ul');
listElement.classList.add('select-options');

const itemEl = document.createElement('li');

selectWrapperElement.append(selectRef, wrapElement, listElement);
selectRef.classList.add('select-hidden');
formRef.append(selectWrapperElement);

for (let i = 0; i < selectRef.children.length; i++) {
  const itemEl = document.createElement('li');
  itemEl.textContent = selectRef.children[i].textContent;
  itemEl.setAttribute('rel', `${selectRef.children[i].value}`);
  listElement.append(itemEl);
}

// /////////////////////////
const selectStyledRef = document.querySelector('.select-styled');
const selectOptionsRef = document.querySelector('.select-options');

selectStyledRef.addEventListener('click', () => {
  selectOptionsRef.classList.toggle('js-open-list');
});

selectOptionsRef.addEventListener('click', e => {
  wrapElement.textContent = e.target.textContent;
  selectOptionsRef.classList.toggle('js-open-list');
});

const parseSelectList = () => {};

// ..............................
// $('select').each(function () {
//   var $this = $(this),
//     numberOfOptions = $(this).children('option').length;

//   $this.addClass('select-hidden');
//   $this.wrap('<div class="select"></div>');
//   $this.after('<div class="select-styled"></div>');

//   var $styledSelect = $this.next('div.select-styled');
//   $styledSelect.text($this.children('option').eq(0).text());

//   var $list = $('<ul />', {
//     class: 'select-options',
//   }).insertAfter($styledSelect);

//   for (var i = 0; i < numberOfOptions; i++) {
//     $('<li />', {
//       text: $this.children('option').eq(i).text(),
//       rel: $this.children('option').eq(i).val(),
//     }).appendTo($list);
//     //if ($this.children('option').eq(i).is(':selected')){
//     //  $('li[rel="' + $this.children('option').eq(i).val() + '"]').addClass('is-selected')
//     //}
//   }

//   var $listItems = $list.children('li');

//   $styledSelect.click(function (e) {
//     e.stopPropagation();
//     $('div.select-styled.active')
//       .not(this)
//       .each(function () {
//         $(this).removeClass('active').next('ul.select-options').hide();
//       });
//     $(this).toggleClass('active').next('ul.select-options').toggle();
//   });

//   $listItems.click(function (e) {
//     e.stopPropagation();
//     $styledSelect.text($(this).text()).removeClass('active');
//     $this.val($(this).attr('rel'));
//     $list.hide();
//     //console.log($this.val());
//   });

//   $(document).click(function () {
//     $styledSelect.removeClass('active');
//     $list.hide();
//   });
// });
