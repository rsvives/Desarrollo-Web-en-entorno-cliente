function show(sms) {
	document.write('<h1> Texto ' + sms + ' en tamaño h1 </h1>');
	document.write('<h2> Texto ' + sms + ' en tamaño h2 </h2>');
	document.write('<h3> Texto ' + sms + ' en tamaño h3 </h3>');
	document.write('<h4> Texto ' + sms + ' en tamaño h4 </h4>');
	document.write('<h5> Texto ' + sms + ' en tamaño h5 </h5>');
	document.write('<h6> Texto ' + sms + ' en tamaño h6 </h6>');
}
function click(idButton) {
	if (idButton == 'Spanish') {
		show('Hola');
	} else if (idButton == 'English') {
		show('Hello');
	} else if (idButton == 'Ruso') {
		show('Bonjour');
	}
}
