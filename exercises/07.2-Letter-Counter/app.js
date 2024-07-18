//Declaramos una variable que contiene un "string".
let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
//Definimos una variable con un objeto vacío, aquí guardaremos el conteo de cada letra.
let counts = {};

//Convertimos el "string" en minúsculas.
let stringToLowerCase = par.toLowerCase();
for (let i = 0; i < stringToLowerCase.length; i++) {//Recorre cada carácter del string "stringToLowercase".
    let char = stringToLowerCase[i];//Toma el carácter en la posición "i" del string "stringToLowerCase" y lo guardamos en la variable "char".
    if (char == " ") continue;//si el carácter es un espacio en blanco, el bucle salta a la siguiente iteración.
    else if (counts[char] == undefined) {//Si la letra no está en counts.
        counts[char] = 1;//La agregamos con valor 1.
    }
    else {
        counts[char] = counts[char] + 1;//Si ya está, incrementamos el valor en 1.
    }
}
console.log(counts);//Imprimimos counts.

