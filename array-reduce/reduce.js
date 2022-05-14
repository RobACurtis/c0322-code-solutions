function reduce(array, combine, initialValue) {
  let result = array[0];
  let index = 1;
  if (arguments.length === 3) {
    result = initialValue;
    index = 0;
  }
  for (; index < array.length; index++) {
    result = combine(result, array[index]);
  }
  return result;
}
