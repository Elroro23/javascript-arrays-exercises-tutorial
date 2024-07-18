let allColors = [
	{label: 'Red', sexy: true},
	{label: 'Pink', sexy: false},
	{label: 'Orange', sexy: true},
	{label: 'Brown', sexy: false},
	{label: 'Pink', sexy: true},
	{label: 'Violet', sexy: true},
	{label: 'Purple', sexy: false},
];

function generateLI(color) {
	return `<li>${color.label}</li>`; //Retornamos una lista <li> con cada color del objeto.
}

function filterColors(color) {
	return color.sexy; //Solamente queremos retornar los "true".
}

function generateHTMLFromArray(array) {
	
	let filteredOptions = array.filter((filterColors)); //Filtramos el array basado en la condicion(color.sexy = solo los colores "true").
	let LIs = filteredOptions.map(generateLI); //Aplicamos la función "generateLI" a cada elemento del array "filteredOptions".

	let htmlString = '<ul>'; //Incializamos una variable con el string "ul".
	LIs.forEach(function(element) { //Iteramos sobre cada elemento de la variable "LIs".
		htmlString += element; //En cada iteración concatenamos "ul" con element "<li>...</li>"
	})
	htmlString += '</ul>'; //Cerramos la lista
	return htmlString; //Devolvemos el string que contiene todos los elementos.
}

console.log(generateHTMLFromArray(allColors)); //Llamamos a la función.
