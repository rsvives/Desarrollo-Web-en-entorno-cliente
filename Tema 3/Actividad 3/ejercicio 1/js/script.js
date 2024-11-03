function form() {
	let inputs = document.querySelectorAll('input');
	let inputUser = inputs[0].value;
	let inputPassword = inputs[1].value;
	console.log(inputUser, inputPassword);
}
function load() {
	let button = document.querySelector('button');
	button.onclick = form();
}
document.body.onload = load();
