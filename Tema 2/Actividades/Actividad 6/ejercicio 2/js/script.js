function show() {
	let inputValueMonth = document.getElementById('month').value;
	let inputValueDay = document.getElementById('day').value;
	let inputValueHour = document.getElementById('hour').value;
	let inputValueEvent = document.getElementById('event').value;
	let calendarOK = false;
	if ((inputValueMonth > 0) & (inputValueMonth < 31)) {
		calendarOK = true;
	}
	if ((inputValueDay > 0) & (inputValueDay < 31)) {
		calendarOK = true;
	}
	if ((inputValueHour > 1) & (inputValueHour < 12)) {
		calendarOK = true;
	}
	if (calendarOK) {
		let textCalendar = document.createElement('p');
		textCalendar.innerText = 'Evento : ' + inputValueEvent + ' , Mes : ' + inputValueMonth + ' , Dia : ' + inputValueDay + ' , Hora : ' + inputValueHour;
		document.body.append(textCalendar);
	}
}
