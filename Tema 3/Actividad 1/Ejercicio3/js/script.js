function findNameDay() {
	let inputDateValue = document.getElementById('dateInput').value;
	console.log(inputDateValue);
	let date = new Date(inputDateValue);
	console.log(date);
	let day = date.getDay();
	console.log(day);
	switch (day) {
		case 1:
			day = 'Lunes';
			break;
		case 2:
			day = 'Martes';
			break;
		case 3:
			day = 'Miercoles';
			break;
		case 4:
			day = 'Jueves';
			break;
		case 5:
			day = 'Viernes';
			break;
		case 6:
			day = 'Sabado';
			break;
		case 7:
			day = 'Domingo';
			break;
		default:
			day = 'Dia no definido';
			break;
	}
	alert('El dia predefinido es: ' + day);
}
