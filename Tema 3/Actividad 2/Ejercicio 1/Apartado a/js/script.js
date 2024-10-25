function showCookies() {
	sessionStorage.setItem('usuario 1', 'Nicolás');
	sessionStorage.setItem('usuario 2', 'Alejandra');
	sessionStorage.setItem('usuario 3', 'Mateo');
	sessionStorage.setItem('usuario 4', 'Elisa');
	sessionStorage.setItem('usuario 5', 'Ricardo');
	let cookies = [sessionStorage.getItem('usuario 1'), sessionStorage.getItem('usuario 2'), sessionStorage.getItem('usuario 3'), sessionStorage.getItem('usuario 4'), sessionStorage.getItem('usuario 5')];
	alert('Las cookies son ' + cookies);
}
