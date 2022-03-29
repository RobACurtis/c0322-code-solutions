var $button = document.querySelector('button');
var $body = document.querySelector('body');

function lights() {
  if ($button.className === 'light shape') {
    $button.className = 'dark shape';
    $body.className = 'background-dark';

  } else {
    $button.className = 'light shape';
    $body.className = 'background-light';
  }
}

$button.addEventListener('click', lights);
