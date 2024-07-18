let mySampleArray = ['Esmeralda', 'Kiko', 'Ruth', 'Lebron', 'Pedro', 'Maria', 'Lou', 'Fernando', 'Cesco', 'Bart', 'Annie'];


//(let i = mySampleArray.length - 1) i es igual al número de elementos del array(.length=11) y -1 nos da el indice del último elemento (10).
for (let i = mySampleArray.length - 1; i >= 0; i--){//(i >= 0;) Nos dice que el bucle se ejecutará mientras i sea igual o mayor que 0.
//(i--)Nos dice que por cada iteración i se decrementa en 1(10,9,8...).
    console.log(mySampleArray[i]); //Imprimimos el indice del array.
}