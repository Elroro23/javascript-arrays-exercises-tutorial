let arrayOfCelsiusValues = [-2, 34, 56, -10];

let arrayOfFahrenheitValues = arrayOfCelsiusValues.map(function(value) { //Aplicamos la función map() para que nos devuelva los valores del array.
	
	
	return (value * 9/5 + 32)  //Multiplicamos el valor del array por la operación matemática para hacer la conversión
});


console.log(arrayOfFahrenheitValues);//Imprimimos en la consola.
