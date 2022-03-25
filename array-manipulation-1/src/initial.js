/* exported initial */
// define the function
// assign an empty array to variable
// loop through the array
// add each item to var
// finish the loop before the last item
// return var
function initial(array) {
  var arr = [];
  for (var i = 0; i < (array.length - 1); i++) {
    arr.push(array[i]);
  }
  return arr;
}
