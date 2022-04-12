/* exported zip */
// create a function to push combine items from two arrays and push them to a new array
// creat an empty array to return the new array
// if the first array is shorter than the second, set the condition to be less than the first array
// if the second array is shorter, set the condition to be less than the second array
// loop through the array
// push the index from each array into a sub array in the new array
// at the end, return the new array

function zip(first, second) {
  var newArr = [];
  if (first.length < second.length) {
    for (var i = 0; i < first.length; i++) {
      newArr.push([first[i], second[i]]);
    }
  } else {
    for (i = 0; i < second.length; i++) {
      newArr.push([first[i], second[i]]);
    }
  }
  return newArr;
}
