var $span = document.querySelectorAll('span');

var $divPlayAgain = document.querySelector('.play-again');
var $playAgain = document.createElement('h2');

var $divScore = document.querySelector('.paragraph');
var $score = document.createElement('p');

var $divButton = document.querySelector('.button');
var $button = document.createElement('button');

var arr = [];
var accuracy;
var letterIndex = 0;

function typingGame(event) {
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
  $playAgain.setAttribute('class', 'green');
  $playAgain.textContent = 'Play Again?';
  $button.textContent = 'fine';
  $divPlayAgain.appendChild($playAgain);
  $divButton.appendChild($button);
  if (accuracy >= 70) {
    $score.textContent = 'You Scored ' + accuracy + '% !!!';
    $score.setAttribute('class', 'score-green');
  } else {
    $score.textContent = 'You Scored ' + accuracy + '%.... FAIL!';
    $score.setAttribute('class', 'score-red');
    $button.setAttribute('class', 'red-button');
  }
  $divScore.appendChild($score);
}

function reset(event) {
  for (var i = 0; i < $span.length; i++) {
    $span[i].className = '';
    $span[0].className = 'underline';
  }
  letterIndex = 0;
  arr = [];
  $divPlayAgain.removeChild($playAgain);
  $divButton.removeChild($button);
  $divScore.removeChild($score);
}

$button.addEventListener('click', reset);
document.addEventListener('keydown', typingGame);
