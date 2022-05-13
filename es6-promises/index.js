const takeAChance = require('./take-a-chance');

const promise = takeAChance('Rob');

promise.then(value => {
  console.log(value);
});

promise.catch(err => {
  console.log(err.message);
});
