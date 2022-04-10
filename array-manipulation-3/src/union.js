/* exported union */
// create a function to push items from both arrays into a new array, which has no repeating values and is in order
// loop through the first array and push each item to the new array
// loop through the second array
// loop through the new array
// compare items from the second array to the new array
// if it matches, break
// if it doesnt match and we reached the end of the new array
// push the item from the second parameter to the new array
// return the final new array from the function.

function union(first, second) {

  var newArr = [];
  for (var i = 0; i < first.length; i++) {
    newArr.push(first[i]);
  }

  for (var secondI = 0; secondI < second.length; secondI++) {
    for (i = 0; i < newArr.length; i++) {
      if (second[secondI] === newArr[i]) {
        break;
      } else if (i === newArr.length - 1) {
        newArr.push(second[secondI]);
      }
    }
  }
  return newArr;
}
