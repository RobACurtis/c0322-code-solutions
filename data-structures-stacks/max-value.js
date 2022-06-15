/* exported maxValue */

function maxValue(stack) {
  let greatestNumber;
  if (stack.peek() === undefined) return -Infinity;
  while (stack.peek() !== undefined) {
    const num = stack.pop();
    if (greatestNumber === undefined) greatestNumber = num;
    if (num > greatestNumber) {
      greatestNumber = num;
    }
  }
  return greatestNumber;
}
