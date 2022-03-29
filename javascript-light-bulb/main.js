var $button = document.querySelector('button');
var $class = $button.className;
var $body = document.querySelector('body');

function lights() {
  if ($class === 'dark shape') {
    $button.className = 'light shape';
    $body.className = 'background-light';
  } else {
    $button.className = 'dark shape';
    $body.className = 'background-dark';
  }
  $class = $button.className;
}

$button.addEventListener('click', lights);
