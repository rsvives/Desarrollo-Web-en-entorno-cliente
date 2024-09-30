/**
 * Función que calculara el area de la circunferencia de un circulo,
 * siendo el area de la circunferencia = pi * r al cuadrado
 */
function calcCircunference() {
	let input = document.getElementById('area');
	if (input.value == '') {
		alert('El valor introducido no existe');
	} else {
		let radius = input.value;
		console.log(radius);
		let area = Math.PI * (radius * radius);
		alert('El area de la circunferencia es ' + area);
		input.value = '';
	}
}
var button = document.querySelector('button');
button.onclick = calcCircunference();
