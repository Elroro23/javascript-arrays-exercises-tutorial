let mixedDataTypes = ['1', '5', '45', '34', '343', '34', 6556, 323];
//Aplicamos .map(function(item)) al array.
let newArray = mixedDataTypes.map(function(item) { //Dentro de .map() definimos una función para retornar el array con la función typeof.
	
	return typeof item //Retornamos con typeof (identifica el tipo de dato de cada elemento del arary).
});

console.log(newArray);
