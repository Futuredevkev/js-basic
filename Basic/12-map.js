// Map

// Como se Declara

let myMap = new Map();

console.log(myMap);

// Inicialiación

myMap = new Map([
  ["name", "kevin"],
  ["email", "kevinkevin@kevin.com"],
  ["age", 37],
]);

console.log(myMap);

// Métodos y propiedades

// set, setear una nueva clave valor

myMap.set("alias", "kevin");
myMap.set("name", "kevin kevin");

console.log(myMap);

// get - obtener clave

console.log(myMap.get("name"));
console.log(myMap.get("surname"));

// has - buscar clave

console.log(myMap.has("surname"));
console.log(myMap.has("age"));

// delete - eliminar por clave

myMap.delete("email");

console.log(myMap);

// keys, values y entries

console.log(myMap.keys()); // obtener claves
console.log(myMap.values()); // obtener valores
console.log(myMap.entries()); // obtener clave y valor

// size

console.log(myMap.size); // size del map

// clear

myMap.clear(); // eliminar map

console.log(myMap);
