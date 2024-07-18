function generateRandomArray() //Definimos una función sin parámetros.
{
	let auxArray = []; //Declaramos una variable que tiene  un array vacío.
	let randomLength = Math.floor(Math.random()*100); //Creamos una variable que genera un número random del 0 al 99.
//Definimos un bucle que se ejecuta "randomLength" veces y añade un número entero entre 0 y 99 al final del array en cada iteración.
	for(let i = 0; i < randomLength; i++) auxArray.push(Math.floor(Math.random()*100)); 
	return auxArray; //Devuelve "auxArray".
}
let myStupidArray = generateRandomArray(); //Definimos una variable que contiene la función

//Declaramos una variable que contiene la función que nos dará el ultimo elemento del array(.length-1).
let theLastOne = myStupidArray[myStupidArray.length-1];
console.log(theLastOne); //Imprimimos la variable.