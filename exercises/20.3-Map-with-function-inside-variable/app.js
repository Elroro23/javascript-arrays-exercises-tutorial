let names = ['Alice', 'Bob', 'Marry', 'Joe', 'Hilary', 'Stevia', 'Dylan']; //Array de nombres.

let prepender = function(name) { //Creamos una función para concatenar texto con los nombres.
	return 'My name is: '+name; //retornamos esa concatenación
};
let newNames = names.map(prepender); //Aplicamos .map(prepender) para que nos devuelva los elementos del array con la concatenación
console.log(newNames);
