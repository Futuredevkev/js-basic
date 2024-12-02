

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let myVariable = "kevin";

if (myVariable === "Kevin".toLocaleLowerCase()) {
  console.log("Sii es igual!");
} else {
  console.log("na que ve");
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let user = "kevin";
let password = 123456;

if (user === "kevin" && password === 123456) {
  console.log("acceda!");
} else {
  console.log("informacion incorrecta");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let number = -1;

if (number > 0) {
  console.log("es positivo");
} else if (number < 0) {
  console.log("el numero es negativo");
} else if (number === 0) {
  console.log("el numero es 0");
} else {
  console.log("ninguno de los casos");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let personAge = 10;
let credential = true;
let votoAge = 18;

if (personAge >= votoAge) {
  console.log("Pasa niño, tu si que puedes votar!");
} else if (!credential) {
  console.log("Niño tu no tienes credencial!");
} else {
  console.log(`Niño te faltan ${votoAge - personAge} años para votar`);
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad

let personTernarioAge = 18;

let adultOrMenor = personTernarioAge >= 18 ? "Es adulto" : "Es menor";

console.log(adultOrMenor);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = "Octubre";
let estacion;

switch (mes) {
  case "Diciembre":
  case "Enero":
  case "Febrero":
    estacion = "Invierno";
    break;
  case "Marzo":
  case "Abril":
  case "Mayo":
    estacion = "Primavera";
    break;
  case "Junio":
  case "Julio":
  case "Agosto":
    estacion = "Verano";
    break;
  case "Septiembre":
  case "Octubre":
  case "Noviembre":
    estacion = "Otoño";
    break;
  default:
    console.log("No proporcionaste un mes correcto.");
}

if (estacion) {
  console.log(`El mes de ${mes} pertenece a la estación: ${estacion}.`);
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

if (
  mes === "Enero" ||
  mes === "Marzo" ||
  mes === "Mayo" ||
  mes === "Julio" ||
  mes === "Agosto" ||
  mes === "Octubre" ||
  mes === "Diciembre"
) {
  dias = 31;
} else if (
  mes === "Abril" ||
  mes === "Junio" ||
  mes === "Septiembre" ||
  mes === "Noviembre"
) {
  dias = 30;
} else if (mes === "Febrero") {
  dias = "28 o 29 (si es año bisiesto)";
} else {
  console.log("Mes no válido.");
}

// Mostrar el resultado
if (dias) {
  console.log(`El mes de ${mes} tiene ${dias} días.`);
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma = "russo";
let saludo;
let person = "Kevin";

switch (idioma) {
  case "Ingles".toLocaleLowerCase():
    saludo = `Hello ${person}`;
    break;
  case "Español".toLocaleLowerCase():
    saludo = `Hola ${person}`;
  case "Russo".toLocaleLowerCase():
    saludo = `Priviet ${person}`;
    break;
  default:
    console.log("No tenemos este idioma");
}

if (idioma) {
  console.log(`El idioma es ${idioma} y el saludo es ${saludo}`);
}

