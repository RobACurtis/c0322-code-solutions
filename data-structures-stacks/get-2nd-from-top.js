/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) return undefined;
  const firstItem = stack.pop();
  const secondItem = stack.pop();
  if (secondItem !== undefined) {
    stack.push(secondItem);
  }
  stack.push(firstItem);
  return secondItem;
}
