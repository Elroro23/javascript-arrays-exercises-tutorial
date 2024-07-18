//Creamos una función con un parámetro que definiremos más adelante.
function matrixBuilder (n){

    let matrix = []; //Inicializamos una variable con un array vacío.
    for (let i = 0; i < n; i++){ //Este bucle se ejecuta "n" cantidad de veces(5)
        let row = []; //En cada iteración del bucle va a crear una fila con un array.
        for (let j = 0; j < n; j++){ //En cada iteración de este bucle añadirá 5 elementos a la fila
            row.push(Math.floor(Math.random()*2)); //Añadimos los 5 elementos que serán 1 número entre el 0 y 1.
        }
        matrix.push(row); //Añadimos el array(matrix) con el array de filas(row).

    }
    return matrix
    
}; 



console.log(matrixBuilder(5))//Específicamos cuantas filas y elementos queremos.
