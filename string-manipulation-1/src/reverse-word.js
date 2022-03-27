/* exported reverseWord */
// define a function
// create a new variable with empty string.
// loop through the argument starting at the end
// concatenate each character to a new variable.
// return variable from the function

function reverseWord(word) {
  var reversed = '';
  for (var i = (word.length - 1); i >= 0; i--) {
    reversed += word[i];
  }
  return reversed;
}
