/* exported removeNext */

function removeNext(list) {
  if (list.next === null) return;
  const data = list.next.next;
  list.next = data;
}
