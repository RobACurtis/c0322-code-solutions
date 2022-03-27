/* exported toObject */
// create a function
// make an empty object to store values into
// assign the zeroed index to the key and the first index to value
// return the object from the function
function toObject(keyValuePair) {
  var obj = {};
  obj[keyValuePair[0]] = keyValuePair[1];
  return obj;
}
