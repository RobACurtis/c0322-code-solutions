/* exported isPalindromic */
// create a function to reverse a string and check if its equal to the original string
// split the string at each letter
// reverse the string
// create an empty string for the final string
// loop through the reversed string and check if there are any spaces
// if there are, delete the space
// increment the index by 1
// assign the reverseStr at the index to the final string array
// then insert a space at the next index
// continue the loop
// add each letter to the final string
// if the final string is equal to the original string
// return true
// if its not return false

function isPalindromic(string) {
  var str = string.split('');
  var reverseStr = str.reverse();
  var finalStr = '';
  for (var i = 0; i < reverseStr.length; i++) {
    if (reverseStr[i] === ' ') {
      reverseStr.splice(i, 1);
      finalStr += reverseStr[i];
      i++;
      reverseStr.splice(i, 0, ' ');
    }
    finalStr += reverseStr[i];
  }

  if (finalStr === string) {
    return true;
  } else {
    return false;
  }
}
