export default function getSelectIndex(collection, value) {
  const newArr = [];
  for (let i = 0; i < collection.length; i++) {
    newArr.push(collection[i].attributes.rel.value);
  }

  const response = newArr.indexOf(value);
  if (response === -1) {
    return console.log('Unable to locate element name');
  } else {
    return response;
  }
}
