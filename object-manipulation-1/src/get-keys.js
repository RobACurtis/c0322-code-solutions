/* exported getKeys */
// create javascript function
// create variable and empty array for keys
// loop through object
// push the keys to array
// return array
function getKeys(object) {
  var keys = [];
  for (var x in object) {
    keys.push(x);
  } return keys;
}
