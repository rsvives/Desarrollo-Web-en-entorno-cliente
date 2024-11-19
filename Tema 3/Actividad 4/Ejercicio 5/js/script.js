class Departure {
	lenght = 4;
	height = 4;
	roomNumber = 44;
	price = 44.44;
	constructor(lenght, height, roomNumber, price) {
		this.lenght = lenght;
		this.height = height;
		this.roomNumber = roomNumber;
		this.price = price;
	}
	showDeparture() {
		let text = '';
		text += `Metros:${this.lenght}, altura: ${this.height}, numero de habitación: ${this.roomNumber}, precio: ${this.price}`;
		return Text;
	}
}
