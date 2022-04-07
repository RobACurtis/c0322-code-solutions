/* exported reverseWords */
// create a function to reverse each word in a string
// split the string at each word
// create an empty string to store the return string
// loop through the string for each word
// for each word split each letter
// reverse the word
// join the array of reversed letters
// check if its the last index,
// if its the last index, join the reversed word to the final string
// if its not the last index, join each word to the string and concatenate a space to the end of it
// return the final string

function reverseWords(string) {
  var word = string.split(' ');
  var finalStr = '';
  for (var i = 0; i < word.length; i++) {
    var str = word[i].split('');
    var reverseStr = str.reverse('');
    var join = reverseStr.join('');
    if (i === word.length - 1) {
      finalStr += join;
    } else {
      finalStr += join + ' ';
    }
  }
  return finalStr;
}
