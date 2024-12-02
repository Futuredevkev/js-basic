

// 1. Crea un array que almacene cinco animales

let animals = ["caballo", "tigre", "perro", "gato", "moski"];

// 2. Añade dos más. Uno al principio y otro al final

animals.push("vaca");
animals.unshift("coño");

// 3. Elimina el que se encuentra en tercera posición

let index = 2;

animals.splice(index, 1);

console.log(animals);

// 4. Crea un set que almacene cinco libros

let set = new Set();

set = new Set(["Kevin", "JOse", "juan", "mogo", "un"]);

// 5. Añade dos más. Uno de ellos repetido

set.add("Joselin");
set.add("juansin");

// 6. Elimina uno concreto a tu elección

set.delete("Joselin");

// 7. Crea un mapa que asocie el número del mes a su nombre

let month = new Map([
  ["Octubre", 10],
  ["Noviembre", 11],
  ["Diciembre", 12],
]);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log(month.has(10));

// 9. Añade al mapa una clave con un array que almacene los meses de verano

let map = new Map();

map.set("verano", ["junio", "julio", "agosto"]);

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let array = ["jose", "juansito", "lensito"];

const set2 = new Set(array);

const map2 = new Map();

map2.set("Nombres", array);
