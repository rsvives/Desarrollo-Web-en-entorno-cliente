/**
 * Función que calcula el número maximo de tres números
 */
function calcMax() {
	let number1 = document.getElementById('number1').value;
	let number2 = document.getElementById('number2').value;
	let number3 = document.getElementById('number3').value;
	let text = '';
	if (number1 >= number2) {
		if (number2 >= number3) {
			text += 'El mayor es el número ' + number1;
		} else {
			if (number1 >= number3) {
				text += 'El mayor es el número ' + number1;
			} else {
				text += 'El mayor es el número ' + number3;
			}
		}
	} else {
		if (number2 >= number3) {
			text += 'El mayor es el número ' + number2;
		} else {
			text += 'El mayor es el número ' + number3;
		}
	}
	document.body.innerHTML += '<p>' + text + '<p>';
}
