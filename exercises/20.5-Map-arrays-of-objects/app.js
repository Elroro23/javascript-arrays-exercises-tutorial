let people = [
	{ name: 'Joe', birthDate: new Date(1986,10,24) },
	{ name: 'Bob', birthDate: new Date(1975,5,24) },
	{ name: 'Erika', birthDate: new Date(1989,6,12) },
	{ name: 'Dylan', birthDate: new Date(1999,12,14) },
	{ name: 'Steve', birthDate: new Date(2003,4,24) }
];

let simplifier = function(person) {
	let currentDate = new Date (); //Obtenemos la fecha actual.
	let age = currentDate.getFullYear() - person.birthDate.getFullYear(); //Obtenemos el año actual y el de cada persona y los restamos.
	let birthDateThisYear = new Date(currentDate.getFullYear(), person.birthDate.getMonth(), person.birthDate.getDate()); //Obtenemos el año, mes y dia de cada persona.
	
	if (currentDate < birthDateThisYear){ //Creamos una condición. Si la fecha actual es menor que la fecha de cada perosna se le resta un año a la edad.
		age = age - 1; //Obtenemos la edad exacta de cada persona.
	};
	return (`Hello, my name is ${person.name} and I am ${age} years old`);
};


console.log(people.map(simplifier));
