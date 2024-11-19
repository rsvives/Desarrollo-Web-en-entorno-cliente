function saveInLocalStorage() {
	console.log('saving in local storage');
	let inputs = document.querySelectorAll('input');
	let inputUser = inputs[0].value;
	let inputPassword = inputs[1].value;
	localStorage.setItem('Usuario', inputUser);
	localStorage.setItem('Contraseña', inputPassword);
}
function load() {
	let button = document.querySelector('button');
	button.onclick = saveInLocalStorage;
}
function recovery() {
	let user = localStorage.getItem('Usuario');
	let password = localStorage.getItem('Contraseña');
	console.log('El usuario es: ' + user);
	console.log('La contraseña es: ' + password);
}
