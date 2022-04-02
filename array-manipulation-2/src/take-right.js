/* exported takeRight */
// create a function to take the last 'count' items from array
// create an empty array for later
// check if the array parameter is empty
// if empty return an empty array
// other wise create a num variable for the for loop starting index
// if the num variable is less than 0 set it to 0
// loop through the array starting at the count index
// push the indexes to the empty array
// return the empty array

function takeRight(array, count) {
  var final = [];
  if (array.length === 0) {
    return final;
  } else {
    var num = array.length - count;
    if (num < 0) {
      num = 0;
    }
    for (var i = num; i < array.length; i++) {
      final.push(array[i]);
    }
  }
  return final;
}
