function howManyTimes() {
	let counter = localStorage.getItem('contador');
	let text = document.createElement('h1');
	if (counter == undefined) {
		alert('Creando contador ...');
		sessionStorage.setItem('contador', 1);
		text.innerText = 'Has clickado al boton 1 vez';
	} else {
		let value = Number(counter);
		sessionStorage.setItem('counter', value);
		text.innerText = 'Has clickado al boton ' + value + ' veces';
		value++;
	}
	document.body.append(text);
}
