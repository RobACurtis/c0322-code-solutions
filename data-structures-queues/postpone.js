/* exported postpone */

function postpone(queue) {
  if (queue.peek() === undefined) return undefined;
  const value = queue.dequeue();
  queue.enqueue(value);
}
