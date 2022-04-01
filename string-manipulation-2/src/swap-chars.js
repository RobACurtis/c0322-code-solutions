/* exported swapChars */
// create a function to swap characters
// create a variable for the final string to be stored later
// split the string by each character
// get the firstindex of the string and replace it with a character to keep the length the same
// get the second index of the string and assign both to there own  variable
// put the secondIndex in the firsts place and delete the useless character
// put the first index in the seconds place
// loop through the string array and concatenate and assign the new word to the final string
// return the final string.

function swapChars(firstIndex, secondIndex, string) {
  var finalStr = '';
  var str = string.split('');
  var firstI = str.splice(firstIndex, 1, ' ');
  var secondI = str.splice(secondIndex, 1);
  str.splice(firstIndex, 1, secondI[0]);
  str.splice(secondIndex, 0, firstI[0]);
  for (var i = 0; i < str.length; i++) {
    finalStr += str[i];
  }
  return finalStr;
}
