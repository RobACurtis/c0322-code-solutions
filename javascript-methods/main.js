var one = 11;
var two = 22;
var three = 33;
var maximumValue = Math.max(one, two, three);
console.log('maximum value', maximumValue);

var heroes = ['superman', 'batman', 'hulk', 'wolverine'];
var randomNumber = (Math.random(heroes)) * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('random index', randomIndex);
var randomHero = heroes[randomIndex];
console.log('My Favorite Hero is:', randomHero);

var library = [
  {
    title: 'Quo Vadis',
    author: 'Henryk Sienkiewicz'
  },
  {
    title: 'The Chronicles of Narnia',
    author: 'C.S. Lewis'
  },
  {
    title: 'Abandonment to Divine Providence',
    author: ' Jean-Pierre de Caussade'
  }
];

var lastBook = library.pop();
console.log('last book', lastBook);

var firstBook = library.shift();
console.log('first book', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('new library', library);

var fullName = 'Robert Curtis';
var firstAndLastName = fullName.split(' ');
console.log('name: ', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('say my name:', sayMyName);
