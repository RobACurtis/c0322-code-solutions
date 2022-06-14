/* exported countValues */

function countValues(stack) {
  const stackArray = [];
  let index = 0;
  while (stack.peek() !== undefined) {
    stackArray[index] = stack.pop();
    index++;
  }
  return (stackArray.length);
}
