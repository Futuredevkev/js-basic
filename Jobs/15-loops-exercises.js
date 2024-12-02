

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for (let i = 0; i <= 20; i++) {
  console.log(i);
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

const suma = (number1, number2) => {
  return number1 + number2;
};

let total = 0;

for (let i = 1; i <= 100; i++) {
  total = suma(total, i);
}

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

const pares = (number) => {
  return number % 2 === 0 ? number : null;
};

const numbers = [];

for (let i = 0; i <= 50; i++) {
  const result = pares(i);

  if (result !== null) {
    numbers.push(result);
  }
}

console.log(numbers);

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

const arraysNames = ["juan", "lechuga", "papu", "nicki nicole"];

for (let names of arraysNames) {
  console.log(names);
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

const vocals = ["a", "e", "i", "o", "u"];
const text = "como estas?, aca traigo vocales";
let count = 0;

for (let i = 0; i < text.length; i++) {
  if (vocals.includes(text[i].toLowerCase())) {
    count += 1;
  }
}

console.log(`Número de vocales: ${count}`);

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let numbersArray = [1, 2, 5, 6, 7, 8, 10];

let product = 1;

for (let i = 0; i < numbersArray.length; i++) {
  product *= numbersArray[i];
}

console.log(`El producto de todos los números es: ${product}`);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

for (let i = 0; i <= 10; i++) {
  result = 5 * i;
  console.log(`5 * ${i} = ${result}`);
}

// 8. Usa un bucle para invertir una cadena de texto

let textxd = "hola, Como estan";
let invertida = "";

for (let i = textxd.length - 1; i >= 0; i--) {
  // recorre en reversiva la cadena hasta llegar a pos 0
  invertida += textxd[i];
}

console.log(invertida);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let prev = 0;
let next = 1;

for (let i = 0; i < 10; i++) {
  let fib = prev + next;
  prev = next;
  next = fib;
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let filterArraysNumber = [10, 30, 50, 5, 0];
let numbersMayorTen = [];
for (let i = 0; i < filterArraysNumber.length; i++) {
  if (filterArraysNumber[i] > 10) {
    numbersMayorTen.push(filterArraysNumber[i]);
  }
}

console.log(numbersMayorTen);
