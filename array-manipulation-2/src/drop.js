/* exported drop */
// create a function to return array starting at the index of the count parameter
// create an empty array to push the values in later
// loop through the array starting at the count index
// if its undefined, return the final arary
// else push the array at the index to the final array
// return the array

function drop(array, count) {
  var final = [];
  for (var i = count; i < array.length; i++) {
    if (array[i] === undefined) {
      return final;
    } else {
      final.push(array[i]);
    }
  } return final;
}
