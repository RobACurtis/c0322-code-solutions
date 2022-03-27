/* exported toObject */
function toObject(keyValuePair) {
  var obj = {};
  for (var x in keyValuePair) {
    obj[keyValuePair[x]] = keyValuePair[x];
  } return obj;
}

//   var obj = [{ keyValuePair }];
//   console.log(obj);
// }
