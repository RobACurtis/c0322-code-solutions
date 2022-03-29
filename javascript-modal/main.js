var $blue = document.querySelector('.blue-button');
var $pink = document.querySelector('.pink-button');
var $modal = document.querySelector('.hide');

function openModal() {
  $modal.className = '';
}

function closeModal() {
  $modal.className = 'hide';
}

$blue.addEventListener('click', openModal);
$pink.addEventListener('click', closeModal);
