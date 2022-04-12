/* exported omit */
// create a function to create an object with the item not found in the array
// loop through the object
// loop through the array
// check if its equal to the items in the array
// if the items are equal, break.
// if its not equal and you have looped through the whol array
// assign it to the new object
// return the new object from the function

function omit(source, keys) {
  var obj = {};
  for (var keyIndex in source) {
    for (var i = 0; i < keys.length; i++) {
      if (keyIndex === keys[i]) {
        break;
      } else if (keyIndex !== keys[i] && i === keys.length - 1) {
        obj[keyIndex] = source[keyIndex];
      }
    }
  }
  return obj;
}
