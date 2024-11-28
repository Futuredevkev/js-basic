// Loops o bucles

// for

for (let i = 0; i < 5; i++) {
  // recorre i empezando en 0, y recorre  hasta menor a 5 y en cadda iteracion suma 1 i++
  console.log(`Hola ${i}`);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < numbers.length; i++) {
  // recorre la extension del array numbers
  console.log(`Elemento: ${numbers[i]}`);
}

// while

let i = 0;
while (i < 5) {
  // while no para hasta llegar a 4, y en cada iteracion va imprimiendo hola +1
  console.log(`Hola ${i}`);
  i++;
}

// do while

i = 6;
do {
  console.log(`Hola ${i}`);
  i++;
} while (i < 5);

// for of

myArray = [1, 2, 3, 4];

mySet = new Set(["kevin", "kevin", "kevin", 37, true, "kevinkevin@kevin.com"]);

myMap = new Map([
  ["name", "kevin"],
  ["email", "kevinkevin@kevin.com"],
  ["age", 37],
]);

myString = "¡Hola, JavaScript!";

for (let value of myArray) {
  // crea un value por cada elemento de myArray, itera por todo mi array y crea value
  console.log(value);
}

for (let value of mySet) {
  console.log(value);
}

for (let value of myMap) {
  console.log(value);
}

for (let value of myString) {
  console.log(value);
}

// break y continue

for (let i = 0; i < 10; i++) {
  // for pero con condicionales y bloques continue y break
  if (i == 5) {
    continue; // si es igual 5 continua, en algun momento llega la iteracion a este
  } else if (i == 7) {
    break; // si es igual 7 corta ejecucion, en algun momento llega la iteracion a este y corta
  }
  console.log(`Hola ${i}`);
}
