/* exported take2nd */

function take2nd(queue) {
  if (queue.peek() === undefined) return undefined;
  const value = queue.dequeue();
  const secondValue = queue.dequeue();
  queue.enqueue(value);
  if (secondValue === undefined) return value;
  return secondValue;
}
