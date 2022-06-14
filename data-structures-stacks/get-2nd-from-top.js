/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  var secondItem = [stack.pop(), stack.pop()];
  for (let i = secondItem.length - 1; i >= 0; i--) {
    if (secondItem[i] !== undefined) {
      stack.push(secondItem[i]);
    }
  }
  return secondItem[1];
}
