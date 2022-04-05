/* exported take */
// create a function to return a set amount of indexes from array
// create a empty array to store the final array
// loop through the array parameter
// i needs to be less than the length of count
// if array[i] is equal to undefined, return the final empty array
// else push array[i] to the final array
// return the final array

function take(array, count) {
  var final = [];

  for (var i = 0; i < count; i++) {
    if (array[i] === undefined) {
      return final;
    } else {
      final.push(array[i]);
    }
  }
  return final;
}
