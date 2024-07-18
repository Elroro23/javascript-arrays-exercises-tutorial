let theBools = [0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

// Your code here
let wokoYwiki = theBools.map(function(theBool){ //Mapeamos el array y creamos una fucnión que se aplicará a cada elemento.
return theBool === 1 ? "wiki" : "woko"; //La función contiene un condicional el cual se aplicará a cada elemento del array.
});
console.log(wokoYwiki);
