
function lyricsGenerator(technoBeat) {
    let lyrics = "" //Creamos una variable con un string vacío.
    let countOne = 0 //Reiniciamos el contador a 0.

    for (let i = 0; i < technoBeat.length; i++) { //Iteramos sobre nuestro array y devolvemos la cantidad de elementos.
        if (technoBeat[i] === 0) { //Si el elemento del array es igual 0
            lyrics += "Boom " //Agregamos el string a nuestra variable.
            countOne = 0; //Reiniciamos el contador
        } else if (technoBeat[i] === 1) { //Si el elemento es igual a 1.
            lyrics += "Drop the bass " //Agregamos el string a nuestra variable.
            countOne += 1 //Le sumamos uno a nuestro contador para llevar la cuenta de cuantos 1 hay, ya que si hay 3 agregamos otro string.

            if (countOne === 3) { //Si el contador llega a 3.
                lyrics += "!!!Break the bass!!! " //Agregamos este sring.
            }
        }
    }
    return lyrics
};

// Don't change anything below this line
console.log(lyricsGenerator([0, 0, 1, 1, 0, 0, 0]))
console.log(lyricsGenerator([0, 0, 1, 1, 1, 0, 0, 0]))
console.log(lyricsGenerator([0, 0, 0]))
console.log(lyricsGenerator([1, 0, 1]))
console.log(lyricsGenerator([1, 1, 1]))
