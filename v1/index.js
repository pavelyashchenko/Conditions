const number = +prompt('Enter your number');
const operation = prompt('Enter your operation');
const numberTwo = +prompt('Enter your second number');
let result = '';

if (operation === '*' && !isNaN(number) && !isNaN(numberTwo)) {
  result = number * numberTwo;
	alert(`Your result is ${result}`);
} else if (operation === '/' && !isNaN(number) && !isNaN(numberTwo)) {
  result = number / numberTwo;
	alert(`Your result is ${result}`);
} else if (operation === '+' && !isNaN(number) && !isNaN(numberTwo)) {
  result = +number + +numberTwo;
	alert(`Your result is ${result}`);
} else if (operation === '-' && !isNaN(number) && !isNaN(numberTwo)) {
  result = number - numberTwo;
	alert(`Your result is ${result}`);
} else {
  alert('This operation is not exist');
}
