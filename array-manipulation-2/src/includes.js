/* exported includes */
// create a function to check if the value parameter is in the array parameter
// loop through the array
// compare each index to the value parameter
// if it matches, return true from the function
// if there are no matches
// return false from the function
function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  } return false;
}
