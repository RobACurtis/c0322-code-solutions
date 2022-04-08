/* exported titleCase */
// create a function which capitilizes book titles
// the function must not capitilze minor words
// it must capitilize acronyms
// it must capitilize the s in JavaScript
// it must capitilize the first letter after a colon and hyphen
// lower case the entire string
// split the string by words
// create a var for an empty string to be assigned to
// create an array for minor words to be lowercased
// create an array for known acronyms
// loop throug the words
// split each word by letters
// loop through each letter
// create a series of if statements to evaluate each letter
// if the letter is the first letter of a word capitalize it.
// if the letter is a dash, increment the letter index and capitilize the next letter
// if the letter at 0 is J and the letter at 2 is v capitilize the letter index equal to S for JavaScript
// join each word again back to a string concatenated with spaces between each word.
//  create a new array and split each word again from the string
// loop through the new array after the first word
// loop through the minor words
// if the word in the new array is equal to a minor word lower case it
// loop through the known acronyms
// if the word is equal to the known acronym  capitilize all of it.
// join each word into the string again
// remove the space at the end of the string
// return the final string.

function titleCase(string) {
  var lowercase = string.toLowerCase();
  var splitWord = lowercase.split(' ');
  var joinedWord = '';
  var minorWords = ['For', 'The', 'If', 'Of', 'And', 'By', 'An', 'In', 'To', 'On'];
  var knownAcronyms = ['Api', 'Lol', 'Dm'];

  for (var i = 0; i < splitWord.length; i++) {
    var splitLetter = splitWord[i].split('');
    for (var letterIndex = 0; letterIndex < splitLetter.length; letterIndex++) {
      if (letterIndex === 0) {
        splitLetter[letterIndex] = splitLetter[letterIndex].toUpperCase();
      }
      if (splitLetter[letterIndex] === '-') {
        var nextLetter = letterIndex + 1;
        var caps = splitLetter[nextLetter].toUpperCase();
        splitLetter[nextLetter] = caps;
      }
      if (splitLetter[0] === 'J' && splitLetter[2] === 'v' && splitLetter[letterIndex] === 's') {
        var javaS = splitLetter[letterIndex].toUpperCase();
        splitLetter[letterIndex] = javaS;
      }
    }
    joinedWord += splitLetter.join('') + ' ';
  }

  var newArr = joinedWord.split(' ');
  for (var wordI = 1; wordI < newArr.length; wordI++) {
    for (var lwrCaseI = 0; lwrCaseI < minorWords.length; lwrCaseI++) {
      if (newArr[wordI] === minorWords[lwrCaseI]) {
        newArr[wordI] = newArr[wordI].toLowerCase();
      }
    }
    for (var acronymI = 0; acronymI < knownAcronyms.length; acronymI++) {
      if (newArr[wordI] === knownAcronyms[acronymI]) {
        newArr[wordI] = knownAcronyms[acronymI].toUpperCase();
      }
    }
  }

  var newStr = newArr.join(' ');
  var splitNewStr = newStr.split('');

  for (i = 0; i < splitNewStr.length; i++) {
    if (splitNewStr[i] === ':') {
      var newIndex = i + 2;
      splitNewStr[newIndex] = splitNewStr[newIndex].toUpperCase();
    }
  }
  var joinStr = splitNewStr.join('');
  var finalStr = joinStr.slice(0, -1);
  return finalStr;
}
