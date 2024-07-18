let arr = [45,67,87,23,5,32,60];
let newArr = [];//Declaramos un array vacío donde almacenaremos el nuevo.
//Definimos un bucle que recorre el array desde el final hasta el principio.
for(let i = arr.length-1; i >= 0; i--){
    newArr.push(arr[i]);//Agregamos el recorrido inverso al array vacío.
}
console.log(newArr);//Imprimimos la variable que contiene el nuevo array.