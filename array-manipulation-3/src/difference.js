/* exported difference */
// create a javascript function to return a new array with only values that are different than the other array
// create a new variable to hold the items of the new array
// loop through the first array
// nest another loop for the seonc array to loop through
// compare each item to each other at the index of the second array
// if there is a match
// break
// other wise if the index is at the last item push the item to the new array
// reverse this process to push the items in the second array to the new array
// loop through the second array
// loop through the first array
// compare the two arrays, if there is a match break
// otherwise if the index is the last index,
// push it to the new array
// return the new array from the function

function difference(first, second) {
  var newArr = [];
  for (var i = 0; i < first.length; i++) {
    for (var secondI = 0; secondI < second.length; secondI++) {
      if (first[i] === second[secondI]) {
        break;
      } else {
        if (second.length - 1 === secondI) {
          newArr.push(first[i]);
        }
      }
    }
  }

  for (secondI = 0; secondI < second.length; secondI++) {
    for (i = 0; i < first.length; i++) {
      if (second[secondI] === first[i]) {
        break;
      } else {
        if (first.length - 1 === i) {
          newArr.push(second[secondI]);
        }
      }
    }
  }
  return newArr;
}
