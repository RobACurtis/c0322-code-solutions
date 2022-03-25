/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var newWord = [];
  for (var i = 0; i < words.length; i++) {
    var string = words[i] + suffix;
    newWord.push(string);
  }
  return newWord;
}
