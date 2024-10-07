function newHour() {
	var hour = new Date();
	var text = hour.getDate() + ' - ' + hour.getMonth() + ' - ' + hour.getFullYear() + '' + hour.getHours() + ' : ' + hour.getMinutes() + ' : ' + hour.getSeconds();
	document.body.innerHTML += '<p>' + text + '<p>';
}
