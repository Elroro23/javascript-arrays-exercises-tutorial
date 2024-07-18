//Declaramos una variable que contiene un array de números.
let arr = [4,5,734,43,45];

//Agregamos al final del array 2 números aleatorios entre 0 y 100.
arr.push(Math.floor(Math.random() * 100)); 
arr.push(Math.floor(Math.random() * 100));
console.log(arr); //Imprimimos el resultado.
