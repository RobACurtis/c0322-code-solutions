/* exported getWords */
// define a function
// create a var undefined
// check if argument an empty string
// if it is, assign an empty array to var
// return variable from functon
// else use split string method
// assign to var the variable from the function
// return var rom the function
function getWords(string) {
  var str;
  if (string === '') {
    str = [];
    return str;
  } else {
    str = string.split(' ');
  }
  return str;
}
