
const x = parseInt(process.argv[2]);
const y = parseInt(process.argv[4]);

if (process.argv[3] === 'plus') {
  const add = require('./add');
  console.log('result:', add(x, y));
}

if (process.argv[3] === 'over') {
  const divide = require('./divide');
  console.log('result:', divide(x, y));
}

if (process.argv[3] === 'times') {
  const multiply = require('./multiply');
  console.log('result:', multiply(x, y));
}

if (process.argv[3] === 'minus') {
  const subtract = require('./subtract');
  console.log('result: ', subtract(x, y));
}
