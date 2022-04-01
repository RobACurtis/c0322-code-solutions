/* exported swapChars */

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
