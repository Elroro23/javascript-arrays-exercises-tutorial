let myArray = [2323, 4344, 2325, 324413, 21234, 24531, 2123, 42234, 544, 456, 345, 42, 5445, 23, 5656, 423];


let sumOfNumbers = 0; //Inicializamos la variable en 0 para evitar errores.
for(let element of myArray){ //Iteramos en el array "myArray" con un bucle "for of".
    sumOfNumbers += element; //Le sumamos los elementos iterados a la variable "sumOfNumbers".
}
let result = sumOfNumbers / myArray.length; //Obtenemos el promedio dividiendo "sumOfNumbers" y cada elemento del array (myArray.length).
console.log(result); //Imprimimos el resultado.