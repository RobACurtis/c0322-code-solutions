/* exported compact */
function compact(array) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== false && array[i] !== 0 && array[i] !== null &&
      array[i] !== undefined && array[i] !== '' && !Number.isNaN(array[i])) {
      arr.push(array[i]);
    }
  } return arr;
}
