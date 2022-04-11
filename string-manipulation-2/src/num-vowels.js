/* exported numVowels */
// create a function to count the number of vowels
// bring the string to lowercase
// split the string into each letter in order to loop
// create a variable to hold the number of vowels
// create an array to hold the vowels
// loop through each string
// loop through the vowels array
// is the string at index equal to any of the index of vowel?
// if it is equal to the first vowel increment the number variable by one.
// repeat for each index of the numbers variable
// if none are equal, then do nothing with it
// return the numbers variable from the function.

function numVowels(string) {
  var lowerCase = string.toLowerCase();
  var str = lowerCase.split('');
  var num = 0;
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  for (var i = 0; i < str.length; i++) {
    for (var vowelsI = 0; vowelsI < vowels.length; vowelsI++) {
      if (str[i] === vowels[vowelsI]) {
        num++;
      }
    }
  }
  return num;
}
