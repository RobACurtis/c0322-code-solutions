var width = 200;
var height = 473;
var area = width * height;
console.log('area:', area);
console.log(typeof area);

var bill = 1000;
var payment = 2000;
var change = payment - bill;
console.log('change:', change);
console.log(typeof change);

var quizzes = 20;
var midterm = 25;
var final = 80;
var grade = (quizzes + midterm + final) / 3;
console.log('grade:', grade);
console.log(typeof grade);

var firstName = 'Rob';
var lastName = 'Curtis';
var fullName = firstName + ' ' + lastName;
console.log('full name:', fullName);
console.log(typeof fullName);

var ph = 10;
var isAcidic = ph < 7;
console.log('Is Acidic:', isAcidic);
console.log(typeof isAcidic);

var headCount = 22;
var isSparta = headCount === 300;
console.log('isSparta:', isSparta);
console.log(typeof isSparta);

var motto = fullName += ' is the GOAT';
console.log('value of motto:', motto);
console.log(typeof motto);
