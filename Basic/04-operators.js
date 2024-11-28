// Operadores 

let a = 10; 
let b = 25; 

// Operadores aritméticos

console.log(a + b); // suma 
console.log(a - b); // resta
console.log(a * b); // mutliplicacion
console.log(a / b); // division
console.log(a % b); // modulo
console.log(a ** b); // exponente
a++; // incremento
console.log(a);
b--; // decremento
console.log(b);

// Operadores de comparación

console.log(a == b); // igual
console.log(a === b); // igual estricto (por tipo y valor)
console.log(a != b); // distinto
console.log(a > b); // mayor
console.log(a < b); // menor
console.log(a >= b); // mayor o igual
console.log(a <= b); // menor o igual

// Operadores lógicos

console.log(a > b && a < b); // operador and, ambos deben ser verdaderos
console.log(a > b || a < b); // operador or, uno debe ser verdadero
console.log(!a > b); // operador not (negación) si negas una condicion pasa a ser false 

// Operadores de asignación

let myVariable = 10;
myVariable += 5; // myVariable = myVariable + 5
myVariable -= 5; // myVariable = myVariable - 5
myVariable *= 5; // myVariable = myVariable * 5
myVariable /= 5; // myVariable = myVariable / 5

// Operadores ternarios

let c = 10;
let d = 5;

console.log(c > 5 ? "c es mayor que 5" : "c es menor que 5");
console.log(c + d === 15 ? "c + d es igual a 15" : "c + d es distinto a 15");