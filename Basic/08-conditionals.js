// Condicionales

let number1 = 50;
let number2 = 51;

let suma = number1 + number2;

if (suma >= 101) {
  // si cumpla la condicion se ejecuta este
  console.log("es igual o mayor a 101");
} else if (suma > 150) {
  // si cumple otra condicion con un caso especifico se ejecuta este
  console.log("es mayor a 150");
} else {
  // y si no se cumple ninguna, por default se ejecuta este
  console.log("Ninguna de las situaciones es correcta");
}

// Operador ternario (? if) (: else)
const message =
  suma >= 101 ? "Es igual o mayor a 101" : "no es igual ni mayor a 101";
console.log(message);

// switch

let day = 0;
let dayName;

switch (
  day // En este caso analiza el caso de que numero es, osea que caso se esta presentando, y por ejemplo ahora q el day = 0, seria Lunes
) {
  case 0:
    dayName = "Lunes";
    break;
  case 1:
    dayName = "Martes";
    break;
  case 2:
    dayName = "Miercoles";
    break;
  case 3:
    dayName = "Jueves";
    break;
  case 4:
    dayName = "Viernes";
    break;
  case 5:
    dayName = "Sabado";
    break;
  case 6:
    dayName = "Domingo";
    break;
  default: // Si no se pasa ninguno de estos casos.
    dayName = "Numero de dia incorrecto";
}

console.log(dayName);
