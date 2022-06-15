/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  for (let i = 0; i <= index; i++) {
    if (i === index) {
      return queue.dequeue();
    }
    const value = queue.dequeue();
    queue.enqueue(value);
  }
}
