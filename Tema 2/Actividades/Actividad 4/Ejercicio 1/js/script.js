var buttonOver = document.getElementById('over');
var buttonOut = document.getElementById('out');
var buttonBlur = document.getElementById('blur');
function lostFocus() {
	alert('El input ha perdido el foco ');
}
buttonBlur.addEventListener('blur', lostFocus, false);
function hoverIn() {
	alert('Entramos al div');
}
buttonOver.addEventListener('mouseOver', hoverIn, false);
function hoverOut() {
	alert('Salimos del div');
}
buttonOut.addEventListener('mouseout', hoverOut, false);
