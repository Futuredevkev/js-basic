// Array inicial
let myArray = [1, 2, 3, "Kevin"];

// Acceder a posiciones del array
console.log(myArray[0]); // posición inicial: 1
console.log(myArray[myArray.length - 1]); // posición final: "Kevin"



// Métodos comunes de arrays

myArray.push("Moreira"); // Agrega "Moreira" al final
console.log(myArray); // [1, 2, 3, "Kevin", "Moreira"]

myArray.pop(); // Elimina el último elemento
console.log(myArray); // [1, 2, 3, "Kevin"]

myArray.shift(); // Elimina el primer elemento
console.log(myArray); // [2, 3, "Kevin"]

myArray.unshift("Sol", "Senpaii"); // Agrega elementos al inicio
console.log(myArray); // ["Sol", "Senpaii", 2, 3, "Kevin"]

console.log(myArray.length); // Longitud del array: 5

// Usando slice
let slicedArray = myArray.slice(1, 3); // Extrae del índice 1 al 3 (sin incluir el 3)
console.log(slicedArray); // ["Senpaii", 2]
console.log(myArray); // El array original no se modifica

// Usando splice
let splicedArray = myArray.splice(1, 2); // Elimina 2 elementos desde el índice 1
console.log(splicedArray); // ["Senpaii", 2]
console.log(myArray); // ["Sol", 3, "Kevin"]

myArray.splice(1, 1, "Nuevo elemento"); // Reemplaza 1 elemento en el índice 1
console.log(myArray); // ["Sol", "Nuevo elemento", "Kevin"]

// Iterando con forEach
myArray.forEach((element) => console.log(element));
// Output: "Sol", "Nuevo elemento", "Kevin"

// Map con un caso útil
// Ejemplo: Transformar a mayúsculas solo los elementos que son strings
let uppercasedArray = myArray.map((element) =>
  typeof element === "string" ? element.toUpperCase() : element
);
console.log(uppercasedArray); // ["SOL", "NUEVO ELEMENTO", "KEVIN"]

// concat() - Combina dos o más arrays
let newArray = myArray.concat(["Extra", 4]);
console.log(newArray); // [1, 2, 3, "Kevin", "Extra", 4]

// join() - Convierte el array en un string con un separador
let joined = myArray.join(", ");
console.log(joined); // "1, 2, 3, Kevin"

// reverse() - Invierte el orden del array
myArray.reverse();
console.log(myArray); // ["Kevin", 3, 2, 1]

// sort() - Ordena los elementos del array alfabéticamente o numéricamente
let sortedArray = [5, 2, 8, 3, 1].sort((a, b) => a - b); // Orden numérico ascendente
console.log(sortedArray); // [1, 2, 3, 5, 8]

// includes() - Comprueba si un valor existe en el array
console.log(myArray.includes("Kevin")); // true
console.log(myArray.includes(4)); // false

// indexOf() - Encuentra el índice de un elemento
console.log(myArray.indexOf(3)); // 1
console.log(myArray.indexOf("No existe")); // -1 (no encontrado)

// find() - Encuentra el primer elemento que cumple con una condición
let found = myArray.find((element) => typeof element === "string");
console.log(found); // "Kevin"

// findIndex() - Encuentra el índice del primer elemento que cumple con una condición
let foundIndex = myArray.findIndex((element) => typeof element === "string");
console.log(foundIndex); // 0 (índice de "Kevin")

// filter() - Filtra elementos según una condición
let filteredArray = myArray.filter((element) => typeof element === "number");
console.log(filteredArray); // [3, 2, 1]

// every() - Verifica si todos los elementos cumplen con una condición
let allNumbers = myArray.every((element) => typeof element === "number");
console.log(allNumbers); // false (porque hay strings)

// some() - Verifica si al menos un elemento cumple con una condición
let hasStrings = myArray.some((element) => typeof element === "string");
console.log(hasStrings); // true

// reduce() - Acumula valores aplicando una función
let sum = [1, 2, 3, 4].reduce((acc, num) => acc + num, 0);
console.log(sum); // 10

// flat() - Aplana arrays anidados en un solo nivel
let nestedArray = [1, [2, [3, [4]]]];
let flattened = nestedArray.flat(2); // Aplana hasta 2 niveles
console.log(flattened); // [1, 2, 3, [4]]

// flatMap() - Combina map() y flat() en una sola operación
let flatMapped = [1, 2, 3].flatMap((num) => [num, num * 2]);
console.log(flatMapped); // [1, 2, 2, 4, 3, 6]

// fill() - Llena el array con un valor específico
myArray.fill("Relleno", 1, 3); // Desde el índice 1 al 3 (excluido)
console.log(myArray); // ["Kevin", "Relleno", "Relleno", 1]

// at() - Accede a un elemento por su posición (positivo o negativo)
console.log(myArray.at(0)); // "Kevin" (primer elemento)
console.log(myArray.at(-1)); // 1 (último elemento)

// keys(), values(), entries() - Iteradores para recorrer el array
let keys = [...myArray.keys()];
console.log(keys); // [0, 1, 2, 3]

let values = [...myArray.values()];
console.log(values); // ["Kevin", "Relleno", "Relleno", 1]

let entries = [...myArray.entries()];
console.log(entries); // [[0, "Kevin"], [1, "Relleno"], [2, "Relleno"], [3, 1]]

// isArray() - Comprueba si un objeto es un array
console.log(Array.isArray(myArray)); // true
console.log(Array.isArray({})); // false




// Clear array

myArray = []; // Vacía el array
console.log(myArray); // []
