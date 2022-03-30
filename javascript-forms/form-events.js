function handleFocus(event) {
  console.log('the focus event was fired: ');
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log('the blur event was fired: ');
  console.log(event.target.name);
}

function handleInput(event) {
  console.log('target name: ', event.target.name);
  console.log('value of name: ', event.target.value);
}

var $input = document.querySelector('input[name= "name"]');
var $input1 = document.querySelector('input[name = "email"]');
var $textArea = document.querySelector('textarea[name = "message"]');

$input.addEventListener('focus', handleFocus);
$input.addEventListener('blur', handleBlur);
$input.addEventListener('input', handleInput);
$input1.addEventListener('focus', handleFocus);
$input1.addEventListener('blur', handleBlur);
$input1.addEventListener('input', handleInput);
$textArea.addEventListener('focus', handleFocus);
$textArea.addEventListener('blur', handleBlur);
$textArea.addEventListener('input', handleInput);
