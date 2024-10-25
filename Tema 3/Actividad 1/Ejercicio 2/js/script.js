function isWekeend() {
	let inputDateValue = document.getElementById('dateInput').value;
	console.log(inputDateValue);
	let date = new Date(inputDateValue);
	console.log(date);
	let day = date.getDay();
	console.log(day);
	let textDay = '';
	switch (day) {
		case 1:
			textDay = 'Tienes que currar ⚒️';
			break;
		case 2:
			textDay = 'Tienes que currar ⚒️';
			break;
		case 3:
			textDay = 'Tienes que currar ⚒️';
			break;
		case 4:
			textDay = 'Tienes que currar ⚒️';
			break;
		case 5:
			textDay = 'Ya es fin de semana, puedes dormir en paz!!!';
			break;
		case 6:
			textDay = 'Ya es fin de semana, puedes dormir en paz!!!';
			break;
		case 7:
			textDay = 'Ya es fin de semana, puedes dormir en paz!!!';
			break;
		default:
			day = 'Dia no definido';
			break;
	}
	alert(textDay);
}
