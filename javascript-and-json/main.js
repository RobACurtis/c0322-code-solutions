var books = [
  {
    book: 'Harry Potter',
    Author: 'JK Rowling',
    isbn: '674859'
  },
  {
    book: 'The Chronicles of Narnia',
    Author: 'CS Lewis',
    isbn: '748500-5678'
  },
  {
    book: 'Life is Messy',
    Author: 'Matthew Kelly',
    isbn: '746837-2029'
  }
];
console.log('book array: ', books);
console.log('book array typeof: ', typeof books);

JSON.stringify(books);
console.log('stringify: ', JSON.stringify(books));
console.log('stringify typeof: ', typeof JSON.stringify(books));

var string = '[{ "student number id": "045786", "string name": "Matthew Balentino" }]';

console.log('json-string: ', string);
console.log('typeof', typeof string);

var obj = JSON.parse(string);
console.log('JSON parse: ', obj);
console.log('JSON parse typeof: ', typeof obj);
