function load() {
	let sum = 0;
	let number = parseInt(prompt('Introduce un número'));
	while (number > 0) {
		sum += number;
		sum = parseInt(prompt('Introduce otro número'));
	}
	alert('La suma es ' + sum);
}
