function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var seconds = convertMinutesToSeconds(5);
console.log('minutesToSeconds:', seconds);

function greet(name) {
  var greeting = 'hey, ' + name + '!';
  return greeting;
}

var greeting = greet('beavis');
console.log('greeting:', greeting);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var area = getArea(17, 42);
console.log('Area:', area);

function getFirstName(person) {
  var fullName = person.firstName;
  return fullName;
}

var firstName = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('firstName:', firstName);

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  var lastIndex = lastElement;
  return lastIndex;
}

var lastItem = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('last Item:', lastItem);
