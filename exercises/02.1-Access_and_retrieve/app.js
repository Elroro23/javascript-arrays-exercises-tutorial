//Declaramos una variable que posee un array de "strings".
let myArray = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];

// 1. print the 3rd item here
console.log(myArray[2]); //Imprimimos el 3er elemento del array contando desde el indice[0].
// 2. change the 'thursday' value to null here
myArray.splice(4, 1, null); //Método ".splice(4, 1, null)"(4:Desde que posición, 1:cuantos elementos null:por lo que vas a remplazar).
// 3. print the position of step 2
console.log(myArray[4]);//Imprimimos la posición de "null" en el array.