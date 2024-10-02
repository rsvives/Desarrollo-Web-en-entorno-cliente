var cuenta;
function crear() {
	var nombreParam = document.getElementById('nombre').value;
	var apellidosParam = document.getElementById('apellidos').value;
	var numCuentaParam = document.getElementById('numCuenta').value;
	var saldoParam = document.getElementById('saldo').value;

	cuenta = {
		nombre: nombreParam,
		apellidos: apellidosParam,
		numeroCuenta: numCuentaParam,
		saldo: saldoParam,
	};
	console.log('Cuenta creada: ');
}

function mostrar() {
	let texto = 'Datos cuenta: ' + 'Nombre: ' + cuenta.nombre + ' Apellidos: ' + cuenta.apellidos + ' Numero de cuenta ' + ' Saldo: ' + cuenta.saldo;
	console.log(texto);
}
