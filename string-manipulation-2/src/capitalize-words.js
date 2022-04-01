/* exported capitalizeWords */
// create a function to capitilize only first letter of each word
// bring all letters to lowercase
// split the string into array for each word
// create a var to store the word for the loop
// create var to store the final string
// loop over the array containing each word
// for each word split it up into letters
// capitilize the first index
// concatenate each letter and assign to the  var to hold the words
// concactenate a space between the words unless its the last word.
// after each loop concatenate and assign the word to the final string
// return the final string from the function.

function capitalizeWords(string) {
  var lowercase = string.toLowerCase();
  var stringArr = lowercase.split(' ');
  var wrd = '';
  var str = '';
  for (var i = 0; i < stringArr.length; i++) {
    var letter = stringArr[i].split('');
    var upperCase = letter[0].toUpperCase();
    if (i === stringArr.length - 1) {
      wrd += upperCase + stringArr[i].slice(1);
    } else {
      wrd += upperCase + stringArr[i].slice(1) + ' ';
    }
  } str += wrd;
  return str;
}
