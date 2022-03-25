/* exported compact */
// create a function
// create a new array for values
// loop through array parameter
// if the item matches false, null, NaN, undefined, 0, -0, '' dont push to array
// everything else gets assigned to the new array
function compact(array) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== false && array[i] !== 0 && array[i] !== null &&
      array[i] !== undefined && array[i] !== '' && !Number.isNaN(array[i])) {
      arr.push(array[i]);
    }
  } return arr;
}
