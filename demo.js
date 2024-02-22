class Smartphone {
	constructor(brand, color) {
		this.brand = brand;
		this.color = color;
	}
	makeACall() {
		return 'Ring...ring...';
	}
}

class User {
	constructor(name, surname, age) {
		this.name = name;
		this.surname = surname;
		this.age = age;
	}

	getFullname() {
		return `${this.name} ${this.surname}`;
	}
}

let Samsung = new Smartphone('Samsung', 'Gris - Plateado');
let Robert = new User('Robert', 'Hernández', 33);
console.log(Samsung.makeACall(), Robert.getFullname());
