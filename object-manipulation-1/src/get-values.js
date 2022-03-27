/* exported getValues */
// create function
// create empty array assinged to variable
// loop through object
// assign values to array
// return array
function getValues(object) {
  var values = [];
  for (var x in object) {
    values.push(object[x]);
  } return values;
}
