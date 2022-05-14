function map(array, transform) {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    arr.push(transform(array[i]));
  }
  return arr;
}
