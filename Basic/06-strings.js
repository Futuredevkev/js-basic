// strings 

// Concatenación
let myName = "kevin"
let greeting = "Hola, " + myName + "!"
let greetingsBackTicks = `Hola ${myName}!`;

// Metodos de strings 
console.log(greeting.length); // Tamaño cadena de texto
console.log(greeting[1]); // Acceder a un valor especifico
console.log(greeting.indexOf("e")); // Buscar un valor en la cadena 
console.log(greeting.lastIndexOf("e")); // Buscar un valor en la cadena desde el final
console.log(greeting.includes("kevin")); // Verificar si un valor esta en la cadena
console.log(greeting.replace("kevin", "kevin")); // Reemplazar un valor en la cadena
console.log(greeting.toUpperCase()); // Convertir a mayúsculas
console.log(greeting.toLowerCase()); // Convertir a minúsculas
console.log(greeting.slice(0, 3)); // Cortar una parte de la cadena
console.log(greeting.split(" ")); // Dividir la cadena en una array
console.log(greeting.trim()); // Eliminar espacios en blanco
console.log(greeting.concat(" ", "hola")); // Concatenar cadenas
console.log(greeting.repeat(3)); // Repetir una cadena

