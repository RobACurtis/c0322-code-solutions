/* exported capitalizeWord */
// create a function to capitalize first letter of the word
// bring all letters to lowercase
// convert string into array
// at the zeroed index bring to uppercase
// return to string

function capitalizeWord(word) {
  var wrd = word.toLowerCase();
  var str = wrd.charAt(0).toUpperCase() + wrd.slice(1);
  if (str === 'Javascript') {
    str = 'JavaScript';
  }
  return str;
}
