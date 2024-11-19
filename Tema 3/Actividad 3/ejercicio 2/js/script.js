function count() {
	let fechaUltimaVisita = new Date(localStorage.getItem('fechaUltimaVisita')); //ej: ayer
	let visitasHoy = Number(localStorage.getItem('visitasHoy'));

	if (fechaUltimaVisita === undefined || fechaUltimaVisita === null) {
		fechaUltimaVisita = new Date();
	}
	if (visitasHoy === undefined || visitasHoy === null) {
		visitasHoy = 1;
	}

	let hoy = new Date();

	if (fechaUltimaVisita < hoy) {
		console.log('primera visita de hoy');
		fechaUltimaVisita = new Date();
		visitasHoy = 1;
	} else {
		console.log('hoy ya se ha visitado la página');
		visitasHoy++;
	}
	console.log('La fecha de la ultima visita es ', fechaUltimaVisita);
	console.log(visitasHoy);
	localStorage.setItem('fechaUltimaVisita', fechaUltimaVisita);
	localStorage.setItem('visitasHoy', visitasHoy);
}
