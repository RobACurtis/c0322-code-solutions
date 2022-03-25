/* exported isVowel */
// define a function
// create a list of vowels
// loop through the list
// compare the argument to the list
// if there is match then true
// else false.
function isVowel(char) {
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (var i = 0; i < vowels.length; i++) {
    if (char === vowels[i]) {
      return true;
    }
  }
  return false;
}
