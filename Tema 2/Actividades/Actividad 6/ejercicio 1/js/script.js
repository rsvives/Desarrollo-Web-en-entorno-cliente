var names = new Array();
var salary = new Array();
/**
 * Funcion que guarrda en el array e nombre los nombres, y en erl array de salario el salario pasado por pantalla
 */
function save() {
	let names = new Array();
	let salary = new Array();
	names[0] = inputNameValue;
	salary[1] = inputSalaryValue;
	names.push(inputNameValue);
	salary.push(inputSalaryValue);
	console.log('La longitud es: ' + names.length);
}
// buttonSave.onclick = save;
function show() {
	let inputSalaryValue = document.getElementById('salary').value; // Leo el valor del input del salario escrito en pantalla

	let inputNameValue = document.getElementById('name').value; // Leo el valor del input del nombre escrito en pantalla

	let tableRegister = document.createElement('Table'); // Creo la tabla de registros

	let Row1TableRegister = document.createElement('tr'); // Creo la primera fila de la tabla de registros

	let header1TableRegister = document.createElement('th'); // Creo el titulo de la primera columna de la tabla de registros

	header1TableRegister.innerText = 'Nombre'; // Añado el nombre del titulo de la primera fila de la tabla de registros

	let body1TableRegister = document.createElement('td'); // Creo la primera fila de la tabla de registros

	body1TableRegister.innerText = inputNameValue;

	Row1TableRegister.append(header1TableRegister, body1TableRegister); // Añado el titulo y la fila a la columna de la tabla de registros

	let Row2TableRegister = document.createElement('tr');
	let header2TableRegister = document.createElement('th');
	header2TableRegister.innerText = 'Salario';
	let body2TableRegister = document.createElement('td');

	body2TableRegister.innerText = inputSalaryValue;

	Row2TableRegister.append(header2TableRegister, body2TableRegister);

	tableRegister.append(Row1TableRegister, Row2TableRegister); // Añaado las dos columnas a la tabla de regisrtros
	document.body.append(tableRegister);
}
