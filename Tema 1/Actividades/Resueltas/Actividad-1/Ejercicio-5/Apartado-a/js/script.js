function changeColor(idDiv) {
	var divElem = document.getElementById(idDiv);
	var colorDiv = divElem.style.backgroundColor;
	alert(colorDiv);
	document.body.style.backgroundColor = colorDiv;
}
