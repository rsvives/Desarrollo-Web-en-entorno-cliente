function changeIdiom(idButton) {
	let h1 = document.querySelector('h1');
	if (idButton == 'Spanish') {
		h1.innerHTML = 'Bienvenidos jugadores!!!';
	} else if (idButton == 'English') {
		h1.innerHTML = 'Welcome players!!!';
	} else if (idButton == 'Ruso') {
		h1.innerHTML = 'приветствуем игроков!!!';
	}
}
