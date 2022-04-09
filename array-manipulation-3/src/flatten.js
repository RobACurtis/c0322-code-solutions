/* exported flatten */
// create a function to combine arrays with their sub arrays
// create a variable to take in the array
// create a new array and concatenate it with the values inside of the original array
// return the new array from the function.

function flatten(array) {
  var flatten = [].concat.apply([], array);
  return flatten;
}
