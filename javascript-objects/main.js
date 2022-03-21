var student = {
  firstName: 'Rob',
  lastName: 'Curtis',
  age: '28'
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('full name:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Uber Eats';

console.log('lives in irvine?:', student.livesInIrvine);
console.log('previous occupation:', student.previousOccupation);
console.log('student', student);

var vehicle = {
  make: 'toyota',
  model: 'prius',
  year: '2010'
};

vehicle['color'] = 'grey';
console.log('color:', vehicle['color']);
vehicle['isConvertible'] = false;
console.log('convertible:', vehicle['isConvertible']);
console.log('vehicle', vehicle);

var pet = {
  name: 'Remi',
  type: 'husky'
};

delete pet.name;
delete pet.type;
console.log('pet', pet);
