/* exported defaults */
// create a function to move the properties of the source object into the target object that aren't already in the target object
// loop through the source object
// loop through the target object
// if the key matches to the key in the target
// delete the key and continue the function
// loop through the updated keys object
// assign each value to the target object
// return the target object from the function.

function defaults(target, source) {
  for (var key in source) {
    for (var keyT in target) {
      if (key === keyT) {
        delete source[key];
        continue;
      }
    }
  }
  for (key in source) {
    target[key] = source[key];
  }
  return target;
}