let myArray = [3344,34334,454543,342534,4563456,3445,23455,234,262,2335,43323,4356,345,4545,452,345,434,36,345,4334,5454,345,4352,23,365,345,47,63,425,6578759,768,834,754,35,32,445,453456,56,7536867,3884526,4234,35353245,53244523,566785,7547,743,4324,523472634,26665,63432,54645,32,453625,7568,5669576,754,64356,542644,35,243,371,3251,351223,13231243,734,856,56,53,234342,56,545343];
let bigNumber = Infinity; //inicializamos una variable con un valor muy alto.

myArray.forEach(function(item){ //Aplicamos el método ".forEach(function)(item){}" en nuestro array que recorre cada elemento de él.
if(item < bigNumber){ //Definimos la condición. Si el elemento actual es menor que "bigNumber".
    bigNumber = item; //"bigNumber" es igual a ese elemento. Se actualiza cada vez que encuentra un elemento más pequeño.
}
});
 console.log(bigNumber); //Imprimimos "bigNumber".