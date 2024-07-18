//Declaramos un array compuesto de arrays de números.
let coordinatesArray = [[33.747252, -112.633853], [-33.867886, -63.987], [41.303921, -81.901693], [-33.350534, -71.653268]];


for(let subArray of coordinatesArray){ //Iteramos sobre el array "coordinatesArray".
    let longitude = subArray[1]; //Accedemos al segundo elemento de los arrays mediante el índice.
    console.log(longitude); //Imprimimos la variable con el segundo elemento de cada array.
}