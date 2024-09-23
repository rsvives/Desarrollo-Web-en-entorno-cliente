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
	if ((nombre == 'p1') | (nombre == 'p2') | (nombre == 'p3') | (nombre == 'p4') | (nombre == 'p5') | (nombre == 'p6') | (nombre == 'p7')) {
		parrafo.style.color = 'green';
	} else {
		parrafo.style.color = 'red';
	}
}
function falso(nombre) {
	let parrafo = document.getElementById(nombre);
	if ((nombre == 'p1') | (nombre == 'p2') | (nombre == 'p3') | (nombre == 'p4') | (nombre == 'p5') | (nombre == 'p6') | (nombre == 'p7')) {
		parrafo.style.color == 'red';
	} else {
		parrafo.style.color == 'green';
	}
}
