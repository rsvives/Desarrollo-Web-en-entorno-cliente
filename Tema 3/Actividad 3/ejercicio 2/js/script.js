function load() {
	let permanentUser = localStorage.getItem('permanentUser');
	let diaryUser = localStorage.getItem('diaryUser');
	if (permanentUser == undefined) {
		document.getElementById('result').innerHTML = '<br><br>Primera vez de acceso';
		localStorage.setItem('permanentUser', true);
	} else {
		document.getElementById('result').innerHTML = '<br><br>Ya has accedido';
		localStorage.setItem('permanentUser', true);
	}
	if (diaryUser == undefined) {
		document.getElementById('result').innerHTML += '<br><br>Es la primera vez que te conectas hoy';
		let date = new Date();
		let text = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
		localStorage.setItem('permanentUser', text);
	} else {
		let todayDate = new Date();
		let text = todayDate.getDate() + '/' + todayDate.getMonth() + '/' + todayDate.getFullYear();
		if (diaryUser === text) {
			document.getElementById('result').innerHTML += '<br><br>Ya te has conectado hoy';
		} else {
			localStorage.setItem('diaryUser', text);
		}
	}
}
function removeLocalStorage() {
	localStorage.removeItem('permanentUser');
	localStorage.removeItem('diaryUser');
}
