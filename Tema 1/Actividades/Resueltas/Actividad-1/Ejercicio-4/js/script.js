function pregunta1(opcion) {
	if (opcion == 0) {
		var parrafo = document.getElementById('p1');
		parrafo.style.color = 'red';
	} else {
		var parrafo = document.getElementById('p1');
		parrafo.style.color = 'green';
	}
}
function verdadero(nombre) {
	var parrafo = document.getElementById(nombre);
	if (nombre == 'p3') {
		parrafo.style.color = 'green';
	}
}
