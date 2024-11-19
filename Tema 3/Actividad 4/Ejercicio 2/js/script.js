/*
 Escribir un programa en JavaScript mostrar si se han leído los libros del 
siguiente Array de objeto
*/
var libreria = [
	{
		titulo: 'La bestia',
		autor: 'Carmen Mola',
		estadoLectura: true,
	},
	{
		titulo: 'El Italiano',
		autor: 'Arturo Pérez-reverte',
		estadoLectura: true,
	},
	{
		titulo: 'Canción de hielo y fuego: Choque de reyes',
		autor: 'George R.R. Martin',
		estadoLectura: false,
	},
];
libreria.forEach((libro) => {
	if (libro.estadoLectura === true) {
		console.log(`El libro: ${libro.titulo} ha sido leido por: ${libro.autor}`);
	} else {
		console.log(`El libro ${libro.titulo} hay que empezar a leerlo, que estas muy vago`);
	}
});
