/* exported findIndex */

function findIndex(array, value) {
  var ind = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      ind = i;
      return ind;
    } else {
      ind = -1;
    }
  } return ind;
}
