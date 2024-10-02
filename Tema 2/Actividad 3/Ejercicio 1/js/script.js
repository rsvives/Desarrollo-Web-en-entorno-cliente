function cargar() {
	var numeroEntero = 23;
	document.getElementById('texto').innerHTML += 'número entero es ' + typeof numeroEntero + '<br>';
	var numeroDecimal = 23.5;
	document.getElementById('texto').innerHTML += 'número entero es ' + typeof numeroDecimal + '<br>';
	var numeroNegativo = -23;
	document.getElementById('texto').innerHTML += 'número entero es ' + typeof numeroNegativo + '<br>';
	var numeroCadena = '23';
	document.getElementById('texto').innerHTML += 'número entero es ' + typeof numeroCadena + '<br>';
	var array = [23, 24, 25, 26];
	document.getElementById('texto').innerHTML += 'número entero es ' + typeof array + '<br>';
}
