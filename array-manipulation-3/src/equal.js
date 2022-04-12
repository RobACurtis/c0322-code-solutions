/* exported equal */
// create a function to compare two arrays
// create a variable with the statement true
// loop through the first array
// compare each index of both arrays to each other
// if they are matching and the array length matches continue the loop
// else assign the variable to false
// return the variable from the function

function equal(first, second) {
  var value = true;
  for (var i = 0; i < first.length; i++) {
    if (first[i] === second[i] && first.length === second.length) {
      continue;
    } else {
      value = false;
    }
  }
  return value;
}
