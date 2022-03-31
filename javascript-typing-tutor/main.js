var $span = document.querySelectorAll('span');
var p = document.querySelector('p');
var letterIndex = 0;

function key(event) {
  var key = event.key;
  if ($span[letterIndex].textContent === key && letterIndex !== $span.length - 1) {
    $span[letterIndex].className = 'green';
    letterIndex++;
    $span[letterIndex].className = 'underline';
    return letterIndex;
  } else if ($span[letterIndex].textContent === key && letterIndex === $span.length - 1) {
    $span[letterIndex].className = 'green';
    p.className = 'animation';

  } else {
    $span[letterIndex].className = 'red underline-red';

  }
}

document.addEventListener('keydown', key);
