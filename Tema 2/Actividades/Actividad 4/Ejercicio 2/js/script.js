var calc = document.getElementById('calc');
function readArray() {
	let inputValue = document.getElementById('array').value;
	var split = inputValue.split(',');
	console.log('Longitud: ' + split.length);
	var sum = 0;
	for (let i = 0; i < split.length; i++) {
		let number = parseInt(split[i]);
		sum += number;
		if (i == 0) {
			may = split[0];
			little = split[0];
		} else if (number < little) {
			little == number;
		} else if (number > may) {
			may = number;
		}
	}
	document.body.innerHTML += '<p> La suma es: ' + sum + '<p>';
	document.body.innerHTML += '<p> La media es: ' + sum / split.length + '<p>';
}
calc.addEventListener('click', readArray(), false);
