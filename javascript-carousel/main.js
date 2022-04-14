var $rightArrow = document.querySelector('i.r');
var $leftArrow = document.querySelector('i.l');
$rightArrow.addEventListener('click', nextImage);
$leftArrow.addEventListener('click', previousImage);

var $circle = document.querySelectorAll('i.circle');
var $divCircle = document.querySelector('div.circle');
$divCircle.addEventListener('click', dotSelect);

var $images = document.querySelectorAll('img');

var intervalID = setInterval(nextImage, 3000);
var index = 1;

function nextImage(event) {
  if (index >= $images.length) {
    $images[index - 1].className = 'hidden';
    $circle[index - 1].className = 'circle far fa-circle';
    index = 0;
    $images[index].className = '';
    $circle[index].className = 'circle fas fa-circle';
    index++;
  } else if (index < $images.length) {
    $images[index].className = '';
    $circle[index].className = 'circle fas fa-circle';
    $images[index - 1].className = 'hidden';
    $circle[index - 1].className = 'circle far fa-circle';
    index++;
  }
  clearInterval(intervalID);
  intervalID = setInterval(nextImage, 3000);
}

function previousImage(event) {
  if (index === 1) {
    index = $images.length + 1;
  }
  for (var i = 0; i < $images.length; i++) {
    $images[i].className = 'hidden';
    $circle[i].className = 'circle far fa-circle';
  }
  $images[index - 2].className = '';
  $circle[index - 2].className = 'circle fas fa-circle';
  index--;
  clearInterval(intervalID);
  intervalID = setInterval(nextImage, 3000);
}

function dotSelect(event) {
  for (var i = 0; i < $images.length; i++) {
    $images[i].className = 'hidden';
    $circle[i].className = 'circle far fa-circle';
  }
  var id = parseInt(event.target.id);
  $images[id].className = '';
  $circle[id].className = 'circle fas fa-circle circle-view';
  clearInterval(intervalID);
  index = id + 1;
  intervalID = setInterval(nextImage, 3000);
}
