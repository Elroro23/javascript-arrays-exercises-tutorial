//Declaramos una función con su parámetro.
function sumTheElements(theArray) {
	let total = 0; //Inicializamos la variable "total" en 0;
	// Recorremos el array para que nos devuelva el número de elementos (.length)
for(let i = 0; i < theArray.length; i++){
	total += theArray[i]; //Sumamos a la variable "total" el array y su indice (theArray[i]).
}
	return total; //Retornamos el resultado de la suma de "theArray[i]" + total.
}
sumTheElements([2, 13, 34, 5])//Llamamos a la función con los parámetros como array.
console.log(sumTheElements([2, 13, 34, 5])); //Imprimimos la función y sus argumentos.
