let chunkOne = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
let chunkTwo = [ 'Lucas', 'Jake', 'Scott', 'Amy', 'Molly', 'Hannah', 'Lucas' ];

const mergeArrays = (firstArray, secondArray) => { //Definimos una función flecha con dos parámetros que no reciben nada.
    let newArray = [] //Declaramos una variablle con un array vacío en donde almacenaremos el nuevo array.
     newArray = chunkOne.concat(chunkTwo); //Concatenamos los dos arrays en el nuevo array con el método .concat().
    return newArray
}

console.log(mergeArrays(chunkOne, chunkTwo)); //Llamamos e imprimimos la función con la concatenación.
