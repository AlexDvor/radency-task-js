import refs from '../refs';

export default function validateForm(dataForm) {
  for (let i = 0; i < dataForm.length - 1; i++) {
    if (dataForm[i].value === '') {
      dataForm[i].classList.add('is-empty');
      // console.log(`${dataForm[i].name} is empty`);
    } else {
      dataForm[i].classList.remove('is-empty');
    }

    if (dataForm[i].value === 'hide') {
      refs.selectContent.classList.add('is-empty');
      return console.log(`${dataForm[i].name} is empty`);
    } else {
      refs.selectContent.classList.remove('is-empty');
    }
    // console.dir(`${dataForm[i].name} : ${dataForm[i].value}`);
  }
  return true;
}
