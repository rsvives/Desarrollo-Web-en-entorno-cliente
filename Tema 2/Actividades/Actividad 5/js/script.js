const inputArray = document.getElementById('inputArray');
const posArray = document.getElementById('posArray');
const inputValue = document.getElementById('inputValue');
const reset = document.getElementById('reset');
const insert = document.getElementById('insert');
const output = document.getElementById('output');

function clearForm() {
	inputArray.value = '';
	inputValue.value = '';
	posArray.selectedIndex = 0;
	output.innerHTML = '';
}
reset.onclick = clearForm;

function insertValue() {
	const array = inputArray.value.split(',');
	array.map(parseInt(item));
	const valueToInsert = parseInt(inputValue.value);
	const position = parseInt(posArray.value);
	array.splice(position, 0, valueToInsert);
	let textArray = document.createElement('p');
	textArray.innerHTML = array.join(', ');
}

insert.onclick = insertValue;
