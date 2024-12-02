

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

const sumTwoValues = (number1, number2) => {
  return number1 + number2;
};

sumTwoValues(10, 20);

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

let numbersArray = [3, 10, 50, 40, 100, 200];

function numberHigh(arr) {
  return Math.max(...arr); // aca en este caso se usa spread operator para pasar cada numero como argumento, porque la funcion math.max no acepta arrays, sino numeros individuales
}

console.log(numberHigh(numbersArray));

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

const vocals = ["a", "e", "i", "o", "u"];

const vocalsFunction = (str) => {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vocals.includes(str[i].toLowerCase())) {
      count += 1;
    }
  }

  return count;
};

console.log(vocalsFunction("Hola Mundo"));

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

const arrayStrings = [
  "joselito",
  "juanito",
  "autito",
  "lechonsito",
  "caramelito",
  "bolivianito",
];

const arraysMayus = (arr) => {
  const upperCaseArray = arr.map((str) => str.toUpperCase());

  return upperCaseArray;
};

console.log(arraysMayus(arrayStrings));

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function primo(number) {
  if (number <= 1) return false;
  if (number === 2) return true;
  if (number % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

let array1 = [1, 2, 3, 4, 5];
let array2 = [3, 4, 5, 6, 7];

const equal = (arr1, arr2) => {
  return arr1.filter((element) => arr2.includes(element));
};

console.log(equal(array1, array2));

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

const sumAllValuesPrimos = (arr) => {
  let suma = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      // Buscamos los numeros pares de cada i en el array, osea cada numero
      suma += arr[i]; // sumamos y añadimos a la variable el numero sumado y esto va a sumar todo sucesivamente
    }
  }

  return suma;
};

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(sumAllValuesPrimos(numeros));

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

let numberArray2 = [30, 50, 100, 1000, 300, 40000];

const newArrayElevator = (arrNumber) => {
  let result = [];

  for (let i = 0; i < arrNumber.length; i++) {
    result.push(arrNumber[i] ** 2);
  }

  return result;
};

console.log(newArrayElevator(numberArray2));

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

const invertida = (str) => {
  let cadenaInvertida = "";

  for (let i = str.length - 1; i >= 0; i--) {
    cadenaInvertida += str[i];
  }

  return cadenaInvertida;
};

console.log(invertida("Zona escolar"));

// 10. Crea una función que calcule el factorial de un número dado

const factorialNumber = (number) => {
  let resultado = 1;

  for (let i = 1; i <= number; i++) {
    resultado *= i;
  }

  return resultado;
};

console.log(factorialNumber(5));
