//Definimos una variable con un array de números.
let arr = [4,5,734,43,45];
for(let i = 1; i < 11; i++){ //Definimos un bucle que genere números del 1 al 10.
   arr.push(Math.floor(Math.random() * 100)); 
}//Generamos números random del 0 al 99 por cada iteración del bucle y los añadimos al final del array con ".push()".
console.log(arr); //Imprimimos la variable.