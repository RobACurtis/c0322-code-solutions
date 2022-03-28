var num = 1;
var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

function buttonClick(event) {
  $clickCount.textContent = 'Clicks: ' + num++;
  if (num <= 4) {
    $hotButton.className = 'hot-button cold';
  } else if (num <= 7) {
    $hotButton.className = 'hot-button cool';
  } else if (num <= 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (num <= 13) {
    $hotButton.className = 'hot-button warm';
  } else if (num <= 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
}

$hotButton.addEventListener('click', buttonClick);
