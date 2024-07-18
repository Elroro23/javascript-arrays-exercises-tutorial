let i = 20; //Inicializador del bucle "do{}while()""

do {
    if (i == 0) { //Condiciones, Si i es igual a 0 se imprime "LIFTOFF".
        console.log("LIFTOFF");
    } else if (i % 5 === 0) { //Si i es divisible entre 5 se imprime el valor de i + !.
        console.log(`${i}!`);
    } else { //Si no es ninguna de esas condiciones se imprimen los valores del bucle.
        console.log(i);
    }

    i--; //Decremento en 1 de i.
} while (i >= 0); //El bucle se ejecuta mientras i sea mayor o igual que 0.
