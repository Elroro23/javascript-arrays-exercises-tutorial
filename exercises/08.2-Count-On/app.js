//Declaramos un array mixto.
let myArray = [42, true, "towel", [2, 1], 'hello', 34.4, { "name": "juan" }];
//Declaramos una variable con un array vacío.
let hello = [];
//Declaramos un bucle que recorre todos los elementos del arrray.
for (let i = 0; i < myArray.length; i++) {
    let item = myArray[i];//Almacenamos nuestro array con su indice en una variable.
//Aplicamos un condicional para saber los elementos tipo "object" (typeof).
    if (typeof item === 'object') {
        hello.push(item);//Agregamos el array a la variable "hello" con ".push()".
    }
}

console.log(hello);//Imprimimos el nuevo array.
