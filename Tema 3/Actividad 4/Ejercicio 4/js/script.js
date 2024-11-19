let buttonShow = document.getElementById('show');
let buttonSave = document.getElementById('save');
function saveBooks() {
	let booksList = document.createElement('ul');
	let inputTitle = document.getElementById('title').value;
	let inputAuthor = document.getElementById('author').value;

	let book = document.createElement('li');
	book.innerHTML = `Titulo:${inputTitle}, autor:${inputAuthor}`;
	booksList.appendChild(book);
}
// buttonSave.onclick = saveBooks;
let main = document.querySelector('main');
main.innerText = booksList();
