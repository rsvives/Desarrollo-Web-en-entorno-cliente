let data = new Array();

function save() {
	//0. crear un array para almacenar el nombre y el salario

	let person = new Array();

	//1. sacar el valor del nombre y asignarlo a la posición 0

	let nameInputValue = document.getElementById('name').value;

	person[0] = nameInputValue;

	//2. sacar el valor del salario y asignarlo a la posición 0

	let salaryInputValue = document.getElementById('salary').value;

	person[1] = salaryInputValue;

	//3. console.log() del array

	//  console.log(person);

	//4. crear array de datos

	//5. hacer push de array persona dentro de array de datos

	data.push(person);

	//6. mostrar array de datos

	// console.log(data);
}

function show() {
	//1. comprobar que puedo leer "data"

	console.log(data);

	//2. iterar el array data  y por cada registro crear un párrafo (paso opcional)
	let tablePerson = document.querySelector('table');
	// let column1TablePerson = document.createElement('td');
	// let column2TablePerson = document.createElement('td');
	data.forEach((person) => {
		let rowTablePerson = document.createElement('tr');
		// console.log(person[0] + ',' + person[1]);
		person.forEach((field) => {
			console.log(field);
			let columnTablePerson = document.createElement('td');
			columnTablePerson.innerText = field;
			rowTablePerson.append(columnTablePerson);
		});
		tablePerson.append(rowTablePerson);
	});
}
