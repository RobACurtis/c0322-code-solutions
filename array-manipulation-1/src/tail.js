/* exported tail */
// define a new function
// create an empty array
// loop through e ach item of array starting at 1
// push each item to the empty array
// return the array
function tail(array) {
  var arr = [];
  for (var i = 1; i < array.length; i++) {
    arr.push(array[i]);
  }
  return arr;
}
