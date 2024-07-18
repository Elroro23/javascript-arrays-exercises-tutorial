//Declaramos una variable con un arreglo de números.
let mySampleArray = [3423, 5, 4, 47889, 654, 8, 867543, 23, 48, 56432, 55, 23, 25, 12];

//Definimos un bucle que recorra todo los elementos del array.
/*for (let i = 0; i < mySampleArray.length; i = i + 1) {
	console.log(mySampleArray[i]);
}*/
//(14 - 1 = 13)Esto significa que i empieza en 13, que es el índice del último elemento del array.
for (let i = mySampleArray.length - 1; i >= 0; i--) {//(i--)Con un decremento de 1 por cada iteración.
	console.log(mySampleArray[i]);
}