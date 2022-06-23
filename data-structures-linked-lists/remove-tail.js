/* exported removeTail */

function removeTail(list) {
  if (!list.next) return;
  let newList;
  while (list.next.next) {
    newList = list;
    list = list.next;
  }
  newList.next.next = null;
}
