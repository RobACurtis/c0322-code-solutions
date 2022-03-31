var $List = document.querySelector('.task-list');
$List.addEventListener('click', deleteItem);

function deleteItem(event) {
  console.log('target: ', event.target);
  console.log('tagName: ', event.target.tagName);

  if (event.target && event.target.matches('button')) {
    var deleteLi = event.target.closest('.task-list-item');
    console.log('del', deleteLi);
    deleteLi.remove();
  }
}
