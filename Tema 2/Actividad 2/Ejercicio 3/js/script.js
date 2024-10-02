function comprobar() {
	var number1 = document.getElementById('number1');
	var number2 = document.getElementById('number2');
	if (isNumber(number1Text) == false) {
		alert('Error el numero 1 no es número');
	} else {
		number1 = parseInt(number1Text);
	}
	if (isNumber(number2Text) == false) {
		alert('Error el numero 2 no es número');
	} else {
		number2 = parseInt(number1Text);
	}
	if (number1 == number2) {
		console.log('Iguales : triple de la suma ' + 3 * (number1 + number2));
	} else {
		console.log('Diferentes : suma' + (number1 + number2));
	}
}
function isNumber(value) {
	if (isFinite(value) && isNaN(value) == false) {
		return true;
	} else {
		return false;
	}
}
