/* exported filterOutStrings */
function filterOutStrings(values) {
  var numbers = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      numbers.push(values[i]);
    }
  }
  return numbers;
}
