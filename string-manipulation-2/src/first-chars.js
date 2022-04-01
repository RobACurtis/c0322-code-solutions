/* exported firstChars */
// create a function to split the string at the length parameter
// split the string into characters to be counted
// delete the characters after the length provided.
// create a variable for the final string to be returned to
// loop through the array with the shortend characters
// add them to the returned string variable
// return the final string from the function

function firstChars(length, string) {
  var str = string.split('');
  str.splice(length);
  var finalString = '';
  for (var i = 0; i < str.length; i++) {
    finalString += str[i];
  }
  return finalString;
}
