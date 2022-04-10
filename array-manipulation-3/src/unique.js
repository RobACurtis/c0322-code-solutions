/* exported unique */
// create a function to return a new array with no repeating values
// create a new empty array
// create a variable to hold a boolean
// loop through the array
// push the first value without checking the secon array
// loop through the second array
// check if an item in the first array is equal to any item in the second
// if it is, change the boolean to false
// else at the end of the loop push the value to the new array
// change the boolean back to true
// return the new array from the function containing no repetitive  values.

function unique(array) {
  var newArr = [];
  var found = true;
  for (var i = 0; i < array.length; i++) {
    found = true;
    if (i === 0) {
      newArr.push(array[i]);
    } else {
      for (var newArrI = 0; newArrI < newArr.length; newArrI++) {
        if (array[i] === newArr[newArrI]) {
          found = false;
          break;
        }
        if (newArrI === newArr.length - 1 && found === true) {
          newArr.push(array[i]);
          break;
        }
      }
    }
  }
  return newArr;
}
