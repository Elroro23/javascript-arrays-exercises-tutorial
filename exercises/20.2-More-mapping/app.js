let myNumbers = [23, 234, 345, 4356234, 243, 43, 56, 2];

function myFunction(number) { //Creamos una función que multiplica cada elemento de nuestro array por 3.
    return (number * 3); //Retornamos esa operación.
};
let newArray = myNumbers.map(myFunction); //Aplicamos .map(myFunction) al array y añadimos nuestra función(myFunction) como argumento.
console.log(newArray);