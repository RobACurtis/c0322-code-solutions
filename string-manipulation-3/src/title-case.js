/* exported titleCase */
function titleCase(string) {
  var lowercase = string.toLowerCase();
  var splitWord = lowercase.split(' ');
  var joinedWord = '';
  var arr = [];
  for (var i = 0; i < splitWord.length; i++) {
    var splitLetter = splitWord[i].split('');

    // looks for letter after hyphen and capitilizes it and returns it to astring
    for (var letterIndex = 0; letterIndex < splitLetter.length; letterIndex++) {
      if (splitLetter[letterIndex] === '-') {
        var nextLetter = letterIndex + 1;
        var caps = splitLetter[nextLetter].toUpperCase();
        splitLetter[nextLetter] = caps;
      }

    }
    joinedWord += splitLetter.join('') + ' ';
  }
  arr = joinedWord.split(' ');
  console.log(arr);

  for (i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    console.log(arr[i]);
  }
}
// problem.... its one array with only one
