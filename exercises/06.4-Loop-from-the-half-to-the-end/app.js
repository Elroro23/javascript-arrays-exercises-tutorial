let mySampleArray = [3423,5,4,47889,654,8,867543,23,48,56432,55,23,25,12];

let initialValue = 7; //Iniciamos el contador desde el índice 7.
let stopValue = 14; //Paramos el contador en el índice 14(i < stopvalue.Se para en el indice 13[12]).
let increasingValue = 1; //Incrementamos 1 en cada iteración
//Definimos un bucle con las variables declaradas anteriormente.
for(let i = initialValue; i < stopValue; i = i + increasingValue)
{
	console.log(mySampleArray[i]);//Imprimimos los elementos del array.
}
