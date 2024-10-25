function findCookie() {
	let inputCookieValue = document.getElementById('inputCookie').value;
	let cookieOK = localStorage.getItem(inputCookieValue);
	alert('La cookie buscada es ' + cookieOK);
}
