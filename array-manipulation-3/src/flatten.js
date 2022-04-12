/* exported flatten */

// create new empty array
// loop through the array
// check if the value at i is an array
// if it is true
// loop throug the array in the array
// assign the values to the new array
// otherwise push the original values into a new array

function flatten(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === true) {
      for (var arrI = 0; arrI < array[i].length; arrI++) {
        newArr.push(array[i][arrI]);
      }
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
