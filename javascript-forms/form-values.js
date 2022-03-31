var $form = document.querySelector('form');
$form.addEventListener('submit', submit);
function submit(event) {
  event.preventDefault();
  var messageData = {
    name: $form.elements.name.value,
    email: $form.elements.email.value,
    message: $form.elements.message.value
  };
  console.log('message data: ', messageData);
  $form.reset();
}
