/* exported capitalizeWord */
// create a function to capitalize first letter of the word
// bring all letters to lowercase
// check if the word is javascript, if it is, make it JavaScript
// assign JavScript to a var and return it from the function
// otherwise convert string into array
// at the zeroed index bring to uppercase
// concatenate the rest of the word starting at the first index
// assign to the variable
// return string

function capitalizeWord(word) {
  var wrd = word.toLowerCase();
  if (wrd === 'javascript') {
    var str = 'JavaScript';
    return str;
  } else {
    str = wrd.charAt(0).toUpperCase() + wrd.slice(1);
    return str;
  }
}
