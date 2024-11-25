let fixedListEl = document.getElementById('fixed-list');
let orderedListEl = document.getElementById('ordered-list');
let simulateSundayBtn = document.getElementById('simulate-sunday');
let orderedList = loadOrderedList();
let fixedList = [
	{ name: 'Leche fresca botella 1,5L', quantity: 5 },
	{ name: 'Huevos XL paquete', quantity: 1 },
	{ name: 'Nutella bote', quantity: 2 },
];
let shoppingList = []

fixedList.forEach(item => {
	let copiedItem = {
		name: item.name,
		quantity: item.quantity
	}
	shoppingList.push(copiedItem)
})

let today = new Date();

document.addEventListener('DOMContentLoaded', function () {
	simulateSundayBtn.onclick = reset
	checkLastOrder()
	displayFixedList();
	displayOrderedList();

});



function loadOrderedList() {
	let orders;
	if (localStorage.getItem('orders') === null || localStorage.getItem('orders') === undefined) {
		orders = []
	} else {
		orders = JSON.parse(localStorage.getItem('orders'));
	}

	return orders;
}

function displayFixedList() {
	fixedListEl.innerHTML = '';
	let storedFixedList;

	if (localStorage.getItem('storedFixedList') === null || localStorage.getItem('storedFixedList') === undefined) {
		// console.log('nada en el local')
		storedFixedList = fixedList
	} else {
		// console.log('sacando valor')
		storedFixedList = JSON.parse(localStorage.getItem('storedFixedList'))
	}

	// console.log(storedFixedList)
	for (let i = 0; i < storedFixedList.length; i++) {
		let item = storedFixedList[i];
		if (item.quantity > 0) {
			let li = document.createElement('li');
			li.textContent = item.name + ' : ' + item.quantity;
			li.onclick = function () { return promptForOrder(item) }
			fixedListEl.appendChild(li);
		}
	}
}

function promptForOrder(item) {
	let supermarket = prompt('¿Dónde compraste este producto?');

	shoppingList.forEach(i => {
		if (i.name === item.name && item.quantity > 0) {
			i.quantity--
		}
	})

	let order = {
		name: item.name,
		supermarket: supermarket,
		dayOfWeek: today.getDay()
	}

	// localStorage.setItem('order_' + orderedList.length, JSON.stringify(order));
	orderedList.push(order);
	localStorage.setItem('orders', JSON.stringify(orderedList))
	localStorage.setItem('storedFixedList', JSON.stringify(shoppingList));
	displayOrderedList();
	displayFixedList();
}

function displayOrderedList() {
	orderedListEl.innerHTML = '';

	orderedList.forEach(order => {

		let dayOfWeekString = '';
		switch (order.dayOfWeek) {
			case 0:
				dayOfWeekString = 'Sunday'
				break;
			case 1:
				dayOfWeekString = 'Monday'
				break;
			case 2:
				dayOfWeekString = 'Tuesday'
				break;
			case 3:
				dayOfWeekString = 'Wednesday'
				break;
			case 4:
				dayOfWeekString = 'Thursday'
				break;
			case 5:
				dayOfWeekString = 'Friday'
				break;
			case 6:
				dayOfWeekString = 'Saturday'
				break;
		}

		let li = document.createElement('li');
		li.innerText = `${order.name} | ${order.supermarket} | ${dayOfWeekString}`
		orderedListEl.appendChild(li);

	})
}


function reset() {
	alert('Es Domingo a las 23:59');
	localStorage.removeItem('orders');
	localStorage.removeItem('storedFixedList');
	orderedList = [];
	displayOrderedList();
	displayFixedList();
};

function checkLastOrder() {
	let orders = JSON.parse(localStorage.getItem('orders'))


	if (orders !== null) {
		orders = JSON.parse(localStorage.getItem('orders'))
		// console.log(orders)
		let lastOrder = orders[orders.length - 1]
		if (lastOrder.dayOfWeek >= 0 && lastOrder.dayOfWeek > today) {
			reset()
		}
	}

}