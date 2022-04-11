/* exported lastChars */
// create a function similar to firstChars, but gets the last characters first
// split the string
// reverse the string and assign it to an array
// delete the array items from the length paramater
// create a new var and assign it an empty string for later
// loop through the array and decrement the items
// assign the items back to a string
// return the new string from the function

function lastChars(length, string) {
  var str = string.split('');
  var reverse = str.reverse();
  var delStr = reverse.splice(0, length);
  var finalString = '';

  for (var i = delStr.length - 1; i >= 0; i--) {
    finalString += delStr[i];
  }
  return finalString;
}
