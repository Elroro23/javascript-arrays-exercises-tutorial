//Definimos una variable con un array de números enteros.
let listOfNumbers = [4, 80, 85, 59, 37, 25, 5, 64, 66, 81, 20, 64, 41, 22, 76, 76, 55, 96, 2, 68];

//Definimos una funcíon con el array anterior como parámetro
function mergeTwoList(listOfNumbers) {
    let odd = []; //Declaramos dos variables con arrays vacíos.
    let even = [];
    for (let i = 0; i < listOfNumbers.length; i++) { //Declaramos un bucle que nos devuelva la cantidad de elementos.
        if (listOfNumbers[i] % 2 !== 0) { //Si el elemento iterado es impar lo almacenamos en el array "odd".
            odd.push(listOfNumbers[i]); 
        } else {
            even.push(listOfNumbers[i]); //Si es par lo almacenammos en el array "even".
        }
    }
    return odd.concat(even); //Devolvemos el resultado concatenando los arrays.
}
let oddPlusEven = mergeTwoList(listOfNumbers); //Almacenamos la función en una variable para disponerla en todo el código.
console.log(oddPlusEven); //Llamamos a esa variable.
