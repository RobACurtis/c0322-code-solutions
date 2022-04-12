/* exported pick */
// create a function to make a new object
// create a variable with emty object literal
// loop through the array
// loop through the provided object
// compare the keys to the source
// if its equal and if the value is not undefined then assign that value to the new object
// return the new object from the code block

function pick(source, keys) {
  var obj = {};

  for (var i = 0; i < keys.length; i++) {
    for (var key in source) {
      if (key === keys[i] && source[key] !== undefined) {
        obj[key] = source[key];
      }
    }
  }
  return obj;
}
