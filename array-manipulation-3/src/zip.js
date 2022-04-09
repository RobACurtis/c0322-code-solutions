/* exported zip */
// create a function to push combine items from two arrays and push them to a new array
// creat an empty array to return the new array
// loop through the second array
// check if the index of the first array is undefined, break from the function
// otherwise push the index from each array into a sub array in the new array
// at the end, return the new array

function zip(first, second) {
  var newArr = [];
  for (var i = 0; i < second.length; i++) {
    if (first[i] === undefined) {
      break;
    }
    newArr.push([first[i], second[i]]);
  }
  return newArr;
}
