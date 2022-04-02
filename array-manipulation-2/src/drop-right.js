/* exported dropRight */
// create a function to delete last indexes of array
// create an empty array
// check to see if the array parameter is empty
// if it is , return the empty array
// otherwise
// assign the num variable a value of array length - the count parameter
// start looping through the array at 0
// stop when you reach the value of the num variable
// assign each index to the new function
// return the new array from the function

function dropRight(array, count) {
  var final = [];
  if (array.length === 0) {
    return final;
  } else {
    var num = array.length - count;
    for (var i = 0; i < num; i++) {
      final.push(array[i]);
    }
  }
  return final;
}
