let inputText = document.getElementById('inputText');
let btn = document.getElementById('btn');

function addList() {
	let valueInput = inputText.value;
	let list = document.createElement('ul');
	let listElement = document.createElement('li');
	listElement.innerHTML = valueInput;
	list.appendChild(listElement);
}
btn.onclick = 
