function calc(value) {
	if (value === '') {
		alert('ERROR parametro indefinido');
	} else {
		let text = 'El número ' + value + ' es: ';
		let divisor = false;
		if (value % 2 == 0) {
			text += '2';
			if (divisor == true) {
				text += ',';
			} else {
				divisor = true;
			}
		}
		if (value % 3 == 0) {
			if (divisor == true) {
				text += ',';
			} else {
				divisor = true;
			}
			text += '3';
		}
		if (value % 5 == 0) {
			text += '5';
			if (divisor == true) {
				text += ',';
			} else {
				divisor = true;
			}
		}
		if (value % 7 == 0) {
			text += '7';
			if (divisor == true) {
				text += ',';
			} else {
				divisor = true;
			}
		}
		if (divisor == false) {
			text = 'El ' + value + 'no tiene divisores';
		}
		document.body.innerHTML += '<p>' + text + '<p>';
	}
}
