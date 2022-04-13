console.log('Lodash is loaded:', typeof _ !== 'undefined');

// create an array with four object literals for each player
// create an array with 56 objects for every card in a deck of  cards
// create a function to shuffle the cards
// pair the shuffled cards into pairs
// create a function to deal the cards
// call the shuffle cards function
// loop through array of the objects of players
// assign each player a pair of cards
// log the players to the console to see their  cards
// return the cards from the function.
// deal the cards to each player
// create a function to play the game and decide the winner
// create a variable for the final number
// create a variable with an empty string for the winner
// create a variable to call the dealCards function and store the return
// loop through the returned players array
// assign the values of the pair to a variable to count the total score
// check if its an ace, king, queen or jack and assign the value accordingly
// add the two cards together and get the total points
// check if the total points is greater than the previous sumTotal
// if it is, replace the previous highest score with the newest
// concactenate a string to declair the new winner
// return the final winner and log it to the console.

var cardPlayers = [
  {
    name: 'Player One',
    hand: []
  },
  {
    name: 'Player Two',
    hand: []
  },
  {
    name: 'Player Three',
    hand: []
  },
  {
    name: 'Player Four',
    hand: []
  }
];

var cards = [
  { suite: 'clubs', rank: 'Ace' }, { suite: 'clubs', rank: 1 }, { suite: 'clubs', rank: 2 }, { suite: 'clubs', rank: 3 }, { suite: 'clubs', rank: 4 },
  { suite: 'clubs', rank: 5 }, { suite: 'clubs', rank: 6 }, { suite: 'clubs', rank: 7 }, { suite: 'clubs', rank: 8 }, { suite: 'clubs', rank: 9 },
  { suite: 'clubs', rank: 10 }, { suite: 'clubs', rank: 'Jack' }, { suite: 'clubs', rank: 'Queen' }, { suite: 'clubs', rank: 'King' },
  { suite: 'Hearts', rank: 'Ace' }, { suite: 'Hearts', rank: 1 }, { suite: 'Hearts', rank: 2 }, { suite: 'Hearts', rank: 3 }, { suite: 'Hearts', rank: 4 },
  { suite: 'Hearts', rank: 5 }, { suite: 'Hearts', rank: 6 }, { suite: 'Hearts', rank: 7 }, { suite: 'Hearts', rank: 8 }, { suite: 'Hearts', rank: 9 },
  { suite: 'Hearts', rank: 10 }, { suite: 'Hearts', rank: 'Jack' }, { suite: 'Hearts', rank: 'Queen' }, { suite: 'Hearts', rank: 'King' },
  { suite: 'Diamonds', rank: 'Ace' }, { suite: 'Diamonds', rank: 1 }, { suite: 'Diamonds', rank: 2 }, { suite: 'Diamonds', rank: 3 }, { suite: 'Diamonds', rank: 4 },
  { suite: 'Diamonds', rank: 5 }, { suite: 'Diamonds', rank: 6 }, { suite: 'Diamonds', rank: 7 }, { suite: 'Diamonds', rank: 8 }, { suite: 'Diamonds', rank: 9 },
  { suite: 'Diamonds', rank: 10 }, { suite: 'Diamonds', rank: 'Jack' }, { suite: 'Diamonds', rank: 'Queen' }, { suite: 'Diamonds', rank: 'King' },
  { suite: 'Spades', rank: 'Ace' }, { suite: 'Spades', rank: 1 }, { suite: 'Spades', rank: 2 }, { suite: 'Spades', rank: 3 }, { suite: 'Spades', rank: 4 },
  { suite: 'Spades', rank: 5 }, { suite: 'Spades', rank: 6 }, { suite: 'Spades', rank: 7 }, { suite: 'Spades', rank: 8 }, { suite: 'Spades', rank: 9 },
  { suite: 'Spades', rank: 10 }, { suite: 'Spades', rank: 'Jack' }, { suite: 'Spades', rank: 'Queen' }, { suite: 'Spades', rank: 'King' }
];

function shuffleCards() {
  var shuffledDeck = _.shuffle(cards);
  var cardsPaired = _.chunk(shuffledDeck, [2]);
  return cardsPaired;
}

function dealCards() {
  var pairs = shuffleCards();
  for (var i = 0; i < cardPlayers.length; i++) {
    cardPlayers[i].hand = pairs[i];
  }
  console.log(cardPlayers);
  return cardPlayers;
}

function playGame() {
  var sumTotal = 0;
  var winner = '';
  var players = dealCards();
  for (var i = 0; i < players.length; i++) {
    var cardValues = [players[i].hand[0].rank, players[i].hand[1].rank];
    for (var score = 0; score < cardValues.length; score++) {
      if (cardValues[score] === 'Ace') {
        cardValues[score] = 11;
      } else if (cardValues[score] === 'Jack' || cardValues[score] === 'Queen' || cardValues[score] === 'King') {
        cardValues[score] = 10;
      }
    }
    var total = (cardValues[0] + cardValues[1]);
    if (total > sumTotal) {
      sumTotal = total;
      winner = players[i].name + ' with a score of ' + sumTotal + ' WINS!!!';
    }
  }
  return winner;
}

playGame();
