/* exported omit */
// create a function to create an object with the item not found in the array
// loop through the object
// check if its equal to the items in the array or if the array is empty
// if its not equal assign it to the new object
// return the new object from the function

function omit(source, keys) {
  var obj = {};
  for (var keyIndex in source) {
    if (keyIndex !== keys[0] && keyIndex !== keys[1] && keys.length !== 0) {
      obj[keyIndex] = source[keyIndex];
    }
  }
  return obj;
}
