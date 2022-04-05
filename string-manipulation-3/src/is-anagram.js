/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var firstStr = firstString.split('');
  var secondStr = secondString.split('');
  for (var secondI = 0; secondI < secondStr.length; secondI++) {
    for (var firstI = 0; firstI < firstStr.length; firstI++) {
      if (secondStr[secondI] === firstStr[firstI]) {
        secondStr[secondI] = true;
        console.log(secondStr);
      }
    }
  } for (secondI = 0; secondI < secondStr.length; secondI++) {
    if (secondStr[secondI] !== true) {
      secondStr = false;
    } else {
      secondStr = true;
    }
  }
  console.log(secondStr);
  return secondStr;

}
