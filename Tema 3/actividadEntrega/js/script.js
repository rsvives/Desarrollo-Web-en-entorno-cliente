document.addEventListener('DOMContentLoaded', function () {
	let fixedListEl = document.getElementById('fixed-list');
	let orderedListEl = document.getElementById('ordered-list');
	let simulateSundayBtn = document.getElementById('simulate-sunday');
	let orderedList = loadOrderedList();
	let fixedList = [
		{ name: 'Leche fresca botella 1,5L', quantity: 5 },
		{ name: 'Huevos XL paquete', quantity: 1 },
		{ name: 'Nutella bote', quantity: 2 },
	];

	function loadOrderedList() {
		let orders = [];
		let i = 0;
		while (localStorage.getItem('order_' + i) !== null) {
			orders.push(localStorage.getItem('order_' + i));
			i++;
		}
		return orders;
	}

	function displayFixedList() {
		fixedListEl.innerHTML = '';
		for (let i = 0; i < fixedList.length; i++) {
			let item = fixedList[i];
			let li = document.createElement('li');
			li.textContent = item.name + ' : ' + item.quantity;
			li.onclick = (function (item) {
				return function () {
					promptForOrder(item);
				};
			})(item);
			fixedListEl.appendChild(li);
		}
	}

	function promptForOrder(item) {
		let supermarket = prompt('¿Dónde compraste este producto?');
		let today = new Date();
		let dayOfWeek = today.toLocaleString('es-ES', { weekday: 'long' });
		let order = item.name + '|' + item.quantity + '|' + supermarket + '|' + dayOfWeek;
		localStorage.setItem('order_' + orderedList.length, order);
		orderedList.push(order);
		displayOrderedList();
	}

	function displayOrderedList() {
		orderedListEl.innerHTML = '';
		for (let i = 0; i < orderedList.length; i++) {
			let item = orderedList[i].split('|');
			let li = document.createElement('li');
			li.textContent = item[0] + ' : ' + item[1] + ' - ' + item[2] + ' (' + item[3] + ')';
			orderedListEl.appendChild(li);
		}
	}

	simulateSundayBtn.onclick = function () {
		alert('Es Domingo a las 23:59');
		let i = 0;
		while (localStorage.getItem('order_' + i) !== null) {
			localStorage.removeItem('order_' + i);
			i++;
		}
		orderedList = [];
		displayOrderedList();
		displayFixedList();
	};

	displayFixedList();
	displayOrderedList();
});
