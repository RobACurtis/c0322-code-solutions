/* exported numVowels */
// create a function to count the number of vowels
// bring the string to lowercase
// split the string into each letter in order to loop
// create a variable to hold the number of vowels
// create an array to hold the vowels
// loop through each string
// is the string at index equal to any of the first vowel?
// if it is equal to the first vowel increment the number variable by one.
// repeat for each index of the numbers variable
// if none are equal, then do nothing with it
// at the end of each loop return the numbers variable from the function.

function numVowels(string) {
  var lowerCase = string.toLowerCase();
  var str = lowerCase.split('');
  var num = 0;
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  for (var i = 0; i < str.length; i++) {
    if (str[i] === vowels[0]) {
      num++;
    } else if (str[i] === vowels[1]) {
      num++;
    } else if (str[i] === vowels[2]) {
      num++;
    } else if (str[i] === vowels[3]) {
      num++;
    } else if (str[i] === vowels[4]) {
      num++;
    }
  } return num;
}
