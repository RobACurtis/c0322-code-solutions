/* exported intersection */
// create a function to create a new array with the values that are found in both arrays
// create a new variable with the new empty array
// loop through array one
// loop through the second array
// compare the index at one to all values of array two,
// if it matches, push it to the new array
// return the new array

function intersection(first, second) {
  var newArr = [];
  for (var i = 0; i < first.length; i++) {
    for (var secondI = 0; secondI < second.length; secondI++) {
      if (first[i] === second[secondI]) {
        newArr.push(first[i]);
      }
    }
  }
  return newArr;
}
