let contact = {
    fullName: "Jane Doe",
    phone: "321-321-4321",
    email: "test@test.com"
}
contact = { //Declaramos un objeto con sus respectivas llaves y valores.
    fullName: "John Doe",
    phone: "123-123-2134",
    email: "test@nowhere.com"
}

for (let key in contact) { //Iteramos sobre el objeto "contact" con "for in" (Itera sobre las propiedades enumerables de un objeto).
    //Usamos "template literals" para imprimir la variable "key"(representa cada propiedad del objeto) y "contact[key]" el valor.
    console.log(`${key} : ${contact[key]}`);
}

