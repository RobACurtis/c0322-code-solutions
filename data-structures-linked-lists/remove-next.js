/* exported removeNext */

function removeNext(list) {
  if (list.next === null) return;
  list.next.print();
}
