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
wrapElement.textContent = `${ref.selectContent.children[0].textContent}`;

const listElement = document.createElement('ul');
listElement.classList.add('select-options');

selectWrapperElement.append(ref.selectContent, wrapElement, listElement);
ref.selectContent.classList.add('select-hidden');
ref.form.append(selectWrapperElement);

for (let i = 0; i < ref.selectContent.children.length; i++) {
  const itemEl = document.createElement('li');
  itemEl.textContent = ref.selectContent.children[i].textContent;
  itemEl.setAttribute('rel', `${ref.selectContent.children[i].value}`);
  listElement.append(itemEl);
}

const selectStyledRef = document.querySelector('.select-styled');
const selectOptionsRef = document.querySelector('.select-options');

selectStyledRef.addEventListener('click', () => {
  selectOptionsRef.classList.toggle('js-open-list');
});

selectOptionsRef.addEventListener('click', e => {
  wrapElement.textContent = e.target.textContent;
  selectOptionsRef.classList.toggle('js-open-list');
});

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
