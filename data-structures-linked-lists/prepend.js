/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {
  const newList = new LinkedList(list);
  newList.data = value;
  newList.next = list;
  return newList;
}
