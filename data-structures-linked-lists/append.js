/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  const endList = new LinkedList(value);

  let newList;
  while (list) {
    newList = list;
    list = list.next;
  }
  newList.next = endList;
}
