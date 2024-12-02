

// 1. Crea una variable para cada operación aritmética

let suma = 10 + 5;
let resta = 10 - 5;
let multiplicacion = 10 * 5;
let division = 10 / 5;
let modulo = 10 % 5;
let exponente = 10 ** 5;

// 2. Crea una variable para cada tipo de operación de asignación,
let myVariable = 10;

myVariable += 5; // myVariable = myVariable + 5;
myVariable -= 5; // myVariable = myVariable - 5;
myVariable *= 5; // myVariable = myVariable * 5;
myVariable /= 5; // myVariable = myVariable / 5;
myVariable %= 5; // myVariable = myVariable % 5;
myVariable **= 5; // myVariable = myVariable ** 5;


// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

let a = 10;
let b = 5;

console.log(a !== b); // distinto (true)
console.log(a > b); // mayor (true)
console.log(a >= b); // mayor o igual (true) 
console.log(b < a); // menor (true) 
console.log(a + b === 15); // igual (true)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

let c = 10;
let d = 5;

console.log(c === d); // igual (false)
console.log(c < d); // menor (false)
console.log(c <= d); // menor o igual (false)
console.log(d > c); // mayor (false)
console.log(c - d !== 5); // distinto (false)

// 5. Utiliza el operador lógico and

  console.log(c > 5 && d < 10); // true
  console.log(c + d === 15 && c > 5); // true
  console.log(c + d === 20 && c > 5); // false, porque c + d === 15

// 6. Utiliza el operador lógico or

console.log(c > 5 || d < 10); // true
console.log(c + d === 15 || c > 11); // true, porque c + d === 15

// 7. Combina ambos operadores lógicos

console.log(c > 5 && d < 10 || c + d === 20); // true, porque c + d === 15, y true + false = true

// 8. Añade alguna negación

console.log(!(c > 5 && d < 10)); // false, negamos el resultado original true, pasa a ser false

// 9. Utiliza el operador ternario

let isRaining = true; 

console.log(isRaining ? 'esta lloviendo' : 'No esta lloviendo');

// 10. Combina operadores aritméticos, de comparáción y lógicas

let num1 = 25;
let num2 = 35; 

let num3 = 40
let num4 = 60

console.log(num1 + num2 >= 60 && num3 + num4 === 10 || num1 + num2 + num3 === 100);
