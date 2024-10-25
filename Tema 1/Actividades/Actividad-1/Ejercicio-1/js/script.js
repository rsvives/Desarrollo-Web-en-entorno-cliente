const button = document.querySelector('button');
/**
 *
 * Funcion que cambie el parrafo al dar click al boton
 */
function change() {
	let changeText = document.getElementById('parrafo1');
	changeText.innerText = 'Hemos cambiado el contenido del parrafo';
}
button.onclick = change;
