function calc(value) {
	let number = parseInt(value);
	let result = 0;
	if (number < 13) {
		result = 'El resultado de la diferencia es ' + (13 - number);
	} else {
		let valueabs = Math.abs(number - 13) * 2;
		result = 'El resultado es: doble de la diferencia absoluta de ' + valueabs;
	}
}
