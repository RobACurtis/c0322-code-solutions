/* exported reverseWords */
function reverseWords(string) {
  var space = string.split(' ');
  console.log('space', space);
  var letter = [];
  var finalStr = '';
  for (var i = 0; i < space.length; i++) {
    var str = space[i].split('');
    letter.push(str);
  }
  for (i = 0; i < letter.length; i++) {
    var rev = letter[i].reverse();
    console.log('rev', rev);
    for (var revI = 0; revI < rev.length; revI++) {
      finalStr += rev.join(rev[revI]);
      continue;
    }
  }
  console.log(finalStr);
}
