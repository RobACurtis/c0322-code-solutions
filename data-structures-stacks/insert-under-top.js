/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() !== undefined) {
    const lastItem = stack.pop();
    stack.push(value);
    stack.push(lastItem);
  }
  return stack;
}
