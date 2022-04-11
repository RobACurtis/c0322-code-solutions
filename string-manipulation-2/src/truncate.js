/* exported truncate */
// create function
// split the string at each letter and return to array
// delete all indexes starting at the length parameter
// loop through each index of array
// concatenate and add each letter together
// assign the result to a variable
// concatenate an ellipsis
// return the variable from the function

function truncate(length, string) {
  var arr = string.split('');
  arr.splice(length);
  var str = '';
  for (var i = 0; i < arr.length; i++) {
    str += arr[i];
  }
  str += '...';
  return str;
}
