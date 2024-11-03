function createCookies() {
	document.cookie = 'nombre1=nico';
	document.cookie = 'nombre2=rodri';
	document.cookie = 'nombre3=monica';
}

function showCookies() {
	alert(document.cookie);
}

function findCookie() {
	let inputCookieValue = document.getElementById('inputCookie').value;
	let cookies = document.cookie.split(';');
	cookies.forEach((cookie) => {
		let name = cookie.split('=');
		if (name[0] == inputCookieValue) {
			console.log(name[1]);
		}
	});
	createCookies();
}
