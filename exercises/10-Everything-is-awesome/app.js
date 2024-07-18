let myArray = [ 1, 0, 0, 0, 1, 0, 0, 0, 1, 1 ];

const ZerosToYahoos = (arr) => {
    let return_array = [];
    arr.forEach((item) => { //Recorremos los items del array con .forEach().
            
            if(item == 0) { //Específicamos las condiciones. Si el elemento es igual o 0
                return_array.push("Yahoo"); //Agregamos la palabra "Yahoo" en su lugar.
            }else if (item == 1){ //Si es igual a 1.
                return_array.push(1); //Dejamos el 1.
            }
                
    });
    return return_array;
};

console.log(ZerosToYahoos(myArray));
