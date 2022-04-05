/* exported chunk */
// create a javascript function to make multipel arrays from one
// assign the size parameter to a variable
// make the final array for later with one sub array
// create a var for the sub array index
// create the variable for the index
// if the array has no items, return an empty array
// otherwise if the index is less than the size parameter
// push the item to the sub array in the final array
// and then increment i
// when i is greater than the size parameter and less than the length of the array
// make a new sub array
// increment the size parameter by itself so that the loop runs again
// and increase the index for the sub array
// check if the new number for the size variable is greater than the length,
// if its larger this means there will be extra undefined items not necessary
// so get the remainder by subtracting the length of the array by the new size
// subtract the left overs from the first number and assign it to the number
// the loop will keep repeating until the index is greater than the length of the array.
// finally return the final array from the function.

function chunk(array, size) {
  var num = size;
  var finalArr = [[]];
  var subArr = 0;
  var i = 0;

  if (array.length === 0) {
    finalArr = [];
    return finalArr;
  } else {
    while (i < num) {
      finalArr[subArr].push(array[i]);
      i++;
      if (i >= num && i < array.length) {
        finalArr.push([]);
        num += size;
        subArr += 1;
        if (num > array.length) {
          var leftOver = (num - array.length);
          num = num - leftOver;
        }
      }
    }
  }
  return finalArr;
}
