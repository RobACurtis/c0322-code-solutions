var $button = document.querySelector('button');
var $body = document.querySelector('body');
var isLightOn = false;

function lights() {
  if (isLightOn === false) {
    isLightOn = true;
    $button.className = 'light shape';
    $body.className = 'background-light';
  } else {
    isLightOn = false;
    $button.className = 'dark shape';
    $body.className = 'background-dark';
  }
}

$button.addEventListener('click', lights);
