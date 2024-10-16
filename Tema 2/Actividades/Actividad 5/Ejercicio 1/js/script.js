const insert = document.getElementById('insert');
const reset = document.getElementById('reset');
const inputArray = document.getElementById('inputArray');
const inputValue = document.getElementById('inputValue');
/**
 * Función que leer el array del input con el di inputArray y lo escribe por pantalla, dentro la etiqueta p de html.
 */
function readArray() {
	let inputArrayValue = inputArray.value;
	if (inputArrayValue === '') {
		let alert = document.createElement('h1');
		alert.innerText = '¡Array inexistente!Por favor escribe';
		alert.style.color = 'red';
		document.body.append(alert);
	} else {
		let newArray = inputArrayValue.split(',');
		let textArray = document.createElement('p');
		textArray.innerText += newArray;
		document.body.append(textArray);
	}
}
insert.onclick = readArray;
/**
 * Función que resetea todo al darle click al boton
 */
function clearForm() {
	inputArray = '';
	inputValue = '';
}
reset.onclick = clearForm;
/**
 * Función que inserta un valor en la posicion indicada en el input con el id 'inputValue'
 */
function insertParam() {
	let inputValueText = inputValue.value;
	let textNewArray = document.createElement('p');
	textNewArray.innerText = inputValueText;
	document.body.append(textNewArray);
}
