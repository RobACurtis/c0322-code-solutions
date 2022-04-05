/* exported isAnagram */
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
      }
    }
  } console.log(secondStr);
  if (secondStr.length === 0) {
    return true;
  } else {
    return false;
  }
}
