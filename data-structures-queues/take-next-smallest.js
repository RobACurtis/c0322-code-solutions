/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  let value = queue.dequeue();
  let value2 = queue.peek();

  while (value >= value2) {
    queue.enqueue(value);
    value = queue.dequeue();
    value2 = queue.peek();
  }
  return value;
}
