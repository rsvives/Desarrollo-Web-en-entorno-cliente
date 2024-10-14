const read = document.getElementById('read');
const calc = document.getElementById('calc');
const reset = document.getElementById('reset');
/**
 * Función que cuando le des click al boton con el id 'reset',
 * resetee los inputs y elimine los que hay escrito
 */
function resetAll() {
	let numbers = document.getElementById('numbers');
	let numbersValue = numbers.value;
	numbersValue = '';
	let text = document.createElement('p');
	text.innerText = 'Reseteo correctamente';
}
reset.onclick = resetAll();
/**
 * Función que calcule la suma de los elementos recogidos del input numbers
 */
function sum() {
	let numbers = document.getElementById('numbers');
	let numbersValue = numbers.value;
	const numbersArray = [];
	numbersArray.push(numbersValue);
	numbersArray.forEach((number) => {
		sum += number;
	});
	const textSum = document.createElement('h2');
	textSum.innerText = `La suma de los valores introducidos es ${sum}`;
}
calc.onclick = sum();
/**
 * Función que calcule la media de los elementos recogidos del input numbers
 */
function average() {
	let numbers = document.getElementById('numbers');
	let numbersValue = numbers.value;
	const numbersArray = [];
	numbersArray.push(numbersValue);
	numbersArray.forEach((number) => {
		sum += number;
		average = sum / numbersArray.length();
		let textSum = document.createElement('h2');
		textSum.innerText = `La media de los valores introducidos es ${average}`;
	});
}
calc.onclick = average();
/**
 * Función que calcule el menor de los elementos recogidos del input numbers
 */
function little() {
	let numbers = document.getElementById('numbers');
	let numbersValue = numbers.value;
	const numbersArray = [];
	numbersArray.push(numbersValue);
	numbersArray.forEach((number) => {
		// code ...
		let textSum = document.createElement('h2');
		textSum.innerText = `El menor número de los valores introducidos es ${little}`;
	});
}
calc.onclick = little();
/**
 * Función que calcule el mayor de los elementos recogidos del input numbers
 */
function huge() {
	let numbers = document.getElementById('numbers');
	let numbersValue = numbers.value;
	const numbersArray = [];
	numbersArray.push(numbersValue);
	numbersArray.forEach((number) => {
		// code ...
		let textSum = document.createElement('h2');
		textSum.innerText = `El mayor número de los valores introducidos es ${little}`;
	});
}
calc.onclick = huge();
