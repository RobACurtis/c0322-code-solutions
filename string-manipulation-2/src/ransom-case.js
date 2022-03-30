/* exported ransomCase */
// create a function to return the string with every odd letter uppercased.
// lower case all letters and assign it to a variable
// split every letter up in an array
// loop through the array
// see if every number is divisible by 2
// if its not divisible by two, uppercase the letter
// if it is don't do anything
// concatenate every letter and assign it to a new variable.

function ransomCase(word) {
  var str = word.toLowerCase();
  var arr = str.split('');
  var result = '';
  for (var i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      result += arr[i].toUpperCase();
    } else {
      result += arr[i];
    }
  }
  return result;
}
