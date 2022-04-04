/* exported invert */

// create a javascript function to invert an object
// create an empty object to assign the new object to
// loop through the object
// invert the assignments
// return the new object

function invert(source) {
  var obj = {};

  for (var key in source) {
    obj[source[key]] = key;
  }
  return obj;
}
