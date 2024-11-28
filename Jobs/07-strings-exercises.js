/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto

let myName = "kevin";
let myLastName = "perez";


const completeText = `Mi nombre es ${myName} ${myLastName}`;

console.log(completeText);

// 2. Muestra la longitud de una cadena de texto

console.log(completeText.length);

// 3. Muestra el primer y último carácter de un string

console.log(completeText[0]);
console.log(completeText[completeText.length - 1]);

// 4. Convierte a mayúsculas y minúsculas un string

console.log(completeText.toUpperCase());
console.log(completeText.toLowerCase());

// 5. Crea una cadena de texto en varias líneas

let longText = `Mi nombre es kevin
y soy desarrollador de software`;

// 6. Interpola el valor de una variable en un string

let myAge = 23;
let myAgeText = `Mi edad es ${myAge} y soy desarrollador de software`;

// 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log(completeText.replace(/ /g, "_"));


// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(completeText.includes("kevin")); 

// 9. Comprueba si dos strings son iguales

console.log(myName === myLastName);

// 10. Comprueba si dos strings tienen la misma longitud

console.log(myName.length === myLastName.length);