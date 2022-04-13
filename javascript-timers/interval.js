var message = document.querySelector('.countdown-display');

setInterval(countdown, 1000);
var num = 3;
function countdown() {
  message.textContent = num;
  if (num > 0) {
    num -= 1;
  } else if (num === 0) {
    stopCountdown();
  }
}

function stopCountdown() {
  clearInterval(num);
  message.textContent = '~Earth Beeeelooowww Us~';
}
