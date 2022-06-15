/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) return undefined;
  const value = queue.dequeue();
  const secondValue = queue.dequeue();
  if (secondValue === undefined) return value;
  if (secondValue >= value) {
    queue.enqueue(secondValue);
    return value;
  } else {
    queue.enqueue(value);
    return secondValue;
  }
}
