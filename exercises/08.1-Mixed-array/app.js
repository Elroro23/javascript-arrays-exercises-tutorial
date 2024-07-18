//Declaramos un array mixto(números, strings, objetos).
let mix = [42, true, "towel", [2, 1], 'hello', 34.4, { "name": "juan" }];

//Declaramos una variables con un array vacío donde guardaremos el nuevo array.
let newArr = [];
//Creamos un bucle que recorre el arreglo y nos arroja el número de elementos.
for (let i = 0; i < mix.length; i++) {
    let type = typeof mix[i];//Aplicamos el operador "typeof" que nos dice el tipo valor de nuestro array "mix".
    newArr.push(type);//Insertamos nuestro array "type" con el método "push()".
}
console.log(newArr);//Imprimimos el nuevo array.