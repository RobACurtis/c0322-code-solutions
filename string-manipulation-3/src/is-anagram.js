/* exported isAnagram */
// create a function to compare two words
// split the first string by each letter
// split the second string by each letter
// loop through the first string
// check if the index is a space,
// if its a space, then delete it from the string
// loop through the second string
// check if the index is a space, if it is, delete it
// then check if the first string index is found in the second string
// if it is delete that character from the second string
// then break from the loop
// after the function is done looping
// if the string is an Anagram, the array will have 0 characters
// if the second string length is equal to 0 characters
// return true
// else return false

function isAnagram(firstString, secondString) {
  var firstStr = firstString.split('');
  var secondStr = secondString.split('');
  for (var firstI = 0; firstI < firstStr.length; firstI++) {
    if (firstStr[firstI] === ' ') {
      firstStr.splice(firstI, 1);
    }
    for (var secondI = 0; secondI < secondStr.length; secondI++) {
      if (secondStr[secondI] === ' ') {
        secondStr.splice(secondI, 1);
      } else if (secondStr[secondI] === firstStr[firstI]) {
        secondStr.splice(secondI, 1);
        break;
      }
    }
  }
  if (secondStr.length === 0) {
    return true;
  } else {
    return false;
  }
}
