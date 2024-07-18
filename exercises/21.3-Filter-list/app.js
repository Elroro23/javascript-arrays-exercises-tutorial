let names = ['Liam','Emma','Noah','Olivia','William','Ava','James','Isabella','Logan','Sophia','Benjamin','Mia','Mason','Charlotte','Elijah','Amelia','Oliver','Evelyn','Jacob','Abigail','Lucas','Harper','Michael','Emily','Alexander','Elizabeth','Ethan','Avery','Daniel','Sofia','Matthew','Ella','Aiden','Madison','Henry','Scarlett','Joseph','Victoria','Jackson','Aria','Samuel','Grace','Sebastian','Chloe','David','Camila','Carter','Penelope','Wyatt','Riley'];
//Creamos una función y le pasamos dos parámetros(el array y un string que se usará para filtrar los elementos del array).
function filterByName(array, filterString){ 
    
//Convertimos cada elemento del array a minúsculas y includes() verifica si los elementos tienen el substring "filterString" que sirve como criterio. 
let filteredNames = array.filter(item => item.toLowerCase().includes(filterString.toLowerCase()));
return filteredNames;
};
//En este caso algunos elementos contienen el substring "am".
console.log(filterByName(names, 'am'));
//.includes() determina si un string contiene un substring. Cuando se usa en .filter(), ayuda a decidir si un elemento es incluido en el array.