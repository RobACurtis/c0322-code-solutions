/* exported filterOutNulls */
function filterOutNulls(values) {
  var val = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      val.push(values[i]);
    }
  }
  return val;
}
