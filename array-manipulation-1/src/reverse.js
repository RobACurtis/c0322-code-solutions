/* exported reverse */
// define a function
// CREATE A NEW var and assign it an empty array
// loop through the array starting at the end
// push each item to the new var
// return the array
function reverse(array) {
  var reverse = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reverse.push(array[i]);
  }
  return reverse;
}
