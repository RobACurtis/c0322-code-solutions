let count = 3;

const int = setInterval(() => {
  if (count === 0) {
    console.log('Blast Off!');
    clearInterval(int);
    return;
  }
  console.log(count);
  count--;
}, 1000);
