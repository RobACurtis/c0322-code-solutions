/* exported maxValue */

function maxValue(stack) {
  const numbers = [];
  let greatestNumber;

  if (stack.peek() === undefined) {
    return -Infinity;
  } else {
    while (stack.peek() !== undefined) {
      numbers.push(stack.pop());
    }
  }
  for (let i = 0; i < numbers.length; i++) {
    if (i === 0) {
      greatestNumber = numbers[i];
    } else if (numbers[i] > greatestNumber) {
      greatestNumber = numbers[i];
    }
  }
  return greatestNumber;
}
