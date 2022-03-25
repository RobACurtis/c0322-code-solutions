/* exported oddOrEven */
function oddOrEven(numbers) {
  var num = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      num.push('even');
    } else {
      num.push('odd');
    }
  }
  return num;
}
