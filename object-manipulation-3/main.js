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

var suite = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
var cardNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'King', 'Queen'];
var deck = [];

function shuffleCards() {
  deck = [];
  for (var i = 0; i < suite.length; i++) {
    for (var cardI = 0; cardI < cardNum.length; cardI++) {
      var obj = {
        suite: suite[i],
        rank: cardNum[cardI]
      };
      deck.push(obj);
    }

  }

  var shuffle = _.shuffle(deck);
  console.log(shuffle);
  return shuffle;
}

function dealCards() {
  var shuffled = shuffleCards();
  for (var i = 0; i < cardPlayers.length; i++) {
    cardPlayers[i].hand = [];
  }
  for (i = 0; i < cardPlayers.length; i++) {
    for (var pair = i; pair < shuffled.length; pair += 4) {
      cardPlayers[i].hand.push(shuffled[pair]);
      if (cardPlayers[i].hand.length > 1) {
        break;
      }
    }
  }

  console.log(cardPlayers);
  return cardPlayers;
}

function playGame() {
  var sumTotal = 0;
  var winner = '';
  var players = dealCards();
  console.log(cardPlayers);
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
