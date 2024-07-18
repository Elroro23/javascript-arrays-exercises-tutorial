let people = ['juan', 'ana', 'michelle', 'daniella', 'stefany', 'lucy', 'barak', 'emilio'];

// Your code below
function deletePerson(name) {//Creamos una función que tiene como parámetro "name".
    //Declaramos una variable donde aplicamos .filter() al array que contiene las personas.
    //Person dentro de .filter() representa cada elemento del array
    //(=> person != name)Aquí person es el nombre actual que estamos evaluando y name es el nombre que queremos eliminar.
    //(person != name)Es la condición: devuelve true si person no es igual a name, lo que significa que ese nombre no se incluirá en el nuevo array.
    let newArrPeople = people.filter((person) => person !== name)
    return newArrPeople
}
console.log(deletePerson('daniella')); //Llamamos a la función con el nombre que queremos eliminar.
console.log(deletePerson('emilio'));
console.log(deletePerson('juan'));