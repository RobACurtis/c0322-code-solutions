/* exported getLength */

function getLength(list) {
  let index = 0;
  while (list) {
    list = list.next;
    index++;
  }
  return index;
}
