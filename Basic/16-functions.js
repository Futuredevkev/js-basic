// Funciones

// Simple

function myFunc() {
  console.log("¡Hola, función!");
}

for (let i = 0; i < 5; i++) {
  myFunc();
}

// Con parámetros

function myFuncWithParams(name) {
  console.log(`¡Hola, ${name}!`);
}

myFuncWithParams("kevin");
myFuncWithParams("kevin");

// Funciones anónimas

const myFunc2 = function (name) {
  console.log(`¡Hola, ${name}!`);
};

myFunc2("kevin kevin");

// Arrow functions

const myFunc3 = (name) => {
  console.log(`¡Hola, ${name}!`);
};

const myFunc4 = (name) => console.log(`¡Hola, ${name}!`);

myFunc3("kevin kevin");
myFunc4("kevin kevin");

// Parámetros

function sum(a, b) {
  console.log(a + b);
}

sum(5, 10);
sum(5);
sum();

function defaultSum(a = 0, b = 0) {
  console.log(a + b);
}

// Por defecto

defaultSum();
defaultSum(5);
defaultSum(5, 10);
defaultSum((b = 5));

// Retorno de valores

function mult(a, b) {
  return a * b;
}

let result = mult(5, 10);
console.log(result);

// Funciones anidadas

function extern() {
  console.log("Función externa");
  function intern() {
    console.log("Función interna");
  }
  intern();
}

extern();
// intern() Error: fuera del scope

// Funciones de orden superior

function applyFunc(func, param) {
  func(param);
}

applyFunc(myFunc4, "función de orden superior");

// forEach

myArray = [1, 2, 3, 4];

mySet = new Set(["kevin", "kevin", "kevin", 37, true, "kevinkevin@kevin.com"]);

myMap = new Map([
  ["name", "kevin"],
  ["email", "kevinkevin@kevin.com"],
  ["age", 37],
]);

myArray.forEach(function (value) {
  console.log(value);
});

myArray.forEach((value) => console.log(value));

mySet.forEach((value) => console.log(value));

myMap.forEach((value) => console.log(value));