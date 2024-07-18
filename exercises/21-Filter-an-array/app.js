let allNames = ["Romario", "Boby", "Roosevelt", "Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];


let resultingNames = allNames.filter(function(allName){ //Aplicamos .filter() para que nos devuelva un array que cumpla con la condición.
return allName.startsWith("R"); //Condición. Solo devuelve los nombres que empiecen con la letra "R" para eso usamos startwith("string").
});
console.log(resultingNames);
