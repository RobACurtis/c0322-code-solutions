/* exported countValues */

function countValues(stack) {
  let index = 0;
  while (stack.pop() !== undefined) {
    index++;
  }
  return index;
}
