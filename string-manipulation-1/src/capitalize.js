/* exported capitalize */
// define function
// create var for the string
// convert the string to lowercase
// use chartAt to find the first characeter and capitilze it
// whil at the same time slice the string at index 1
// return the string concatenated
function capitalize(word) {
  var str = word.toLowerCase();
  return str.charAt(0).toUpperCase() + str.slice(1);
}
