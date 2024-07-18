let parkingState = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]

function getParkingLotState(parkingState) { //Creamos una función con un parámetro que definiremos más adelante.
  let state = {
    totalSlots: 0, //Inicializamos el valor de cada variable en 0;
    availableSlots: 0,
    occupiedSlots: 0
  }

  for (let i = 0; i < parkingState.length; i++) {  //Iteramos sobre cada fila de arrays del objeto.
    for (let j = 0; j < parkingState[i].length; j++) { //Iteramos sobre cada elemento de la fila de arrays del objeto.

      if (parkingState[i][j] === 2) { //Si los espacios son igual a "2"(reservado).
        state.availableSlots += 1 //  Incrementa a "1" si los espacios están libres.
        state.totalSlots += 1 //Incrementa a "1" para cada espacio.
      }
      else if (parkingState[i][j] === 1) { //Si los espacios son igual a "1"(ocupados).
        state.occupiedSlots += 1 //Incrementa a "1" si los espacios están ocupados.
        state.totalSlots += 1 //Incrementa a "1" para cada espacio.
      }

    }
  }
  return state //Devolvemos el objeto con los resultados.
};


console.log(getParkingLotState(parkingState))
