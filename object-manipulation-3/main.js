console.log('Lodash is loaded:', typeof _ !== 'undefined');
var cardPlayers = [
  {
    name: '',
    hand: []
  },
  {
    name: '',
    hand: []
  },
  {
    name: '',
    hand: []
  },
  {
    name: '',
    hand: []
  }
];

var cards = [
  'Ace of clubs', '2 of clubs', '3 of clubs', '4 of clubs', '5 of clubs', '6 of clubs', '7 of clubs',
  '8 of clubs', '9 of clubs', '10 of clubs', 'Jack of clubs', 'Queen of clubs', 'King of clubs',
  'Ace of Diamonds', '2 of Diamonds', '3 of Diamonds', '4 of Diamonds', '5 of Diamonds', '6 of Diamonds',
  '7 of Diamonds', '8 of Diamonds', '9 of Diamonds', '10 of Diamonds', 'Jack of Diamonds', 'Queen of Diamonds',
  'King of Diamonds', 'Ace of Hearts', '2 of Hearts', '3 of Hearts', '4 of Hearts', '5 of Hearts', '6 of Hearts',
  '7 of Hearts', '8 of Hearts', '9 of Hearts', '10 of Hearts', 'Jack of Hearts', 'Queen of Hearts', 'King of Hearts',
  'Ace of Spades', '2 of Spades', '3 of Spades', '4 of Spades', '5 of Spades', '6 of Spades', '7 of Spades',
  '8 of Spades', '9 of Spades', '10 of Spades', 'Jack of Spades', 'Queen of Spades', 'King of Spades'
];

// create a function to pick to random cards
// delete the cards from the array and store them in a variable.
function cardNum() {
  var num = Math.floor(Math.random() * 56);
  return num;
}
var deletedCards = [];

function dealCards() {

  var cardNum1 = cardNum();
  console.log(cardNum1);
  var card1 = cards[cardNum1];

  var del = cards.splice(cardNum1, 1);
  deletedCards.push(del[0]);

  console.log(card1);
  console.log('deleted', deletedCards);
  console.log(cards);

}
