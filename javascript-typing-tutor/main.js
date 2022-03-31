var $span = document.querySelectorAll('span');
var $div2 = document.querySelector('.play-again');
var $divP = document.querySelector('.paragraph');
var $divButton = document.querySelector('.button');
var $finish = document.createElement('h2');
var $button = document.createElement('button');
var $p = document.createElement('p');

var arr = [];
var accuracy;
var letterIndex = 0;

function key(event) {
  var key = event.key;
  arr.push(key);
  if ($span[letterIndex].textContent === key && letterIndex !== $span.length - 1) {
    $span[letterIndex].className = 'green';
    letterIndex++;
    $span[letterIndex].className = 'underline';
    return letterIndex;
  } else if ($span[letterIndex].textContent === key && letterIndex === $span.length - 1) {
    $span[letterIndex].className = 'green';
    letterIndex++;
    var percent = ($span.length / arr.length) * 100;
    accuracy = Math.floor(percent);
    playAgain();
    return letterIndex;
  } else {
    $span[letterIndex].className = 'red underline-red';
  }
}

function playAgain(event) {
  $finish.setAttribute('class', 'green');
  $finish.textContent = 'Play Again?';
  $button.textContent = 'fine';
  $div2.appendChild($finish);
  $divButton.appendChild($button);
  if (accuracy >= 70) {
    $p.textContent = 'You Scored ' + accuracy + '% !!!';
    $p.setAttribute('class', 'score-green');
  } else {
    $p.textContent = 'You Scored ' + accuracy + '%.... You Suck!';
    $p.setAttribute('class', 'score-red');
  }
  $divP.appendChild($p);
}

function reset(event) {
  for (var i = 0; i < $span.length; i++) {
    $span[i].className = '';
    $span[0].className = 'underline';
  }
  letterIndex = 0;
  arr = [];
  $div2.removeChild($finish);
  $divButton.removeChild($button);
  $divP.removeChild($p);
}

$button.addEventListener('click', reset);
document.addEventListener('keydown', key);
