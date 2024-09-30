function calc(operation) {
	let number1 = parseInt(document.getElementById('number1').value);
	let number2 = parseInt(document.getElementById('number2').value);
	let result = 0;
	if (operation == '+') {
		result = number1 + number2;
	} else if (operation == '-') {
		result = number1 - number2;
	} else if (operation == '*') {
		result = number1 * number2;
	} else if (operation == '/') {
		result = number1 / number2;
	}
	document.body.innerHTML += result;
}
