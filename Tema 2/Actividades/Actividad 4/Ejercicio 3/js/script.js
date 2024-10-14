const contat = document.getElementById('concat');
/**
 * Función auxiliar, que lee el array 1 y 2, para concatenarlo posteriormente, en la función 'concat()'
 */
function readArray() {
	let array1 = document.getElementById('array1');
	let array1Value = array1.value;
	let array2 = document.getElementById('array2');
	let array2Value = array2.value;
}
/**
 * Función que concatena el array 1 y 2, leido por la función leer array
 */
function concat() {
	let array1 = document.getElementById('array1');
	let array2 = document.getElementById('array2');
	array1 = readArray('array1');
	array2 = readArray('array2');
	if (array1.length != array2.length) {
		alert('ERROR, no se puede concatenar');
	} else {
		let arrayResult = [];
		for (let i = 0; i < arrayResult.length; i++) {
			arrayResult.push(number[i]);
			arrayResult.push(number[i]);
		}
		var text = '';
		for (let i = 0; i < arrayResult.length; i++) {
			text += arrayResult[i] + ',';
		}
		text += arrayResult[arrayResult.length - 1];
	}
}
concat.onclick = concat();
