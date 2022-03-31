/* exported capitalizeWords */
function capitalizeWords(string) {
  var lowercase = string.toLowerCase();
  var arr = lowercase.split(' ');
  var str = '';
  for (var i = 0; i < arr.length; i++) {
    var letter = arr[i].split('');
    var upperCase = letter[0].toUpperCase();
    var wrd = upperCase + arr[i].slice(1) + ' ';
    str += wrd;
  }
  // console.log(str);
  return str;
}
