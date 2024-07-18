//Declaramos una variable con un array de números enteros.
let myArray = [43,23,6,87,43,1,4,6,3,67,8,3445,3,7,5435,63,346,3,456,734,6,34];

//Definimos una función con el array como parámetro.
function findMax(myArray){
    let maxNumber = -Infinity; //Iniciamos la variable "-infinity" para asegurar que cualquier número en el array es mayor.
    for(let i = 0; i < myArray.length; i++){ //Definimos un bucle que recorra cada elemento del array.
        if(myArray[i] > maxNumber) //Si el elemento actual de mi array es mayor que -infinity actualizamos "maxNumber".
          maxNumber = myArray[i]; //Actualizamos "maxNumber".
    }
    return maxNumber; //Retornamos el resultado para disponerlo en todo el código.
}
console.log(findMax(myArray));//Llamamos e imprimimos la función.