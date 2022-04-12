console.log('Lodash is loaded:', typeof _ !== 'undefined');
var cardPlayers = [
  playerOne = {
    name: 'Robert',
    hand: []
  },
  playerTwo = {
    name: 'Jack',
    hand: []
  },
  playerThree = {
    name: 'Adam',
    hand: []
  },
  playerFour = {
    name: 'Jimmy',
    hand: []
  }
];

var cards = [{
  Clubs: ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'],
  Diamond: ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'],
  Hearts: ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'],
  Spades: ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']
}
];

function players(name) {
  for (var i in cards) {
    var rendom = Math.random(cards[i]);
    for (var key in cardPlayers) {
      cardPlayers[key].hand = cards[rendom];
    }
  }
  console.log(cardPlayers);
}
