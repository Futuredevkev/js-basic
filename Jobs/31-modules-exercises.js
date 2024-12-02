// 1. Exporta una función
export function greet(name) {
  return `Hola, ${name}!`;
}

// 2. Exporta una constante
export const PI = 3.14159;

// 3. Exporta una clase
export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hola, soy ${this.name} y tengo ${this.age} años.`;
  }
}

// 7. Exporta una función, una constante y una clase por defecto
const defaultFunction = () => "Esta es la función por defecto";
const defaultConstant = "Esta es la constante por defecto";
class DefaultClass {
  greet() {
    return "Soy la clase por defecto";
  }
}

export default { defaultFunction, defaultConstant, DefaultClass };

// 4. Importa una función
import { greet } from "./module.js";

// 5. Importa una constante
import { PI } from "./module.js";

// 6. Importa una clase
import { Person } from "./module.js";

// 8. Importa una función, una constante y una clase por defecto
import defaultExports from "./module.js"; // Obtenemos el objeto por defecto

// Mostrar resultados
console.log(greet("Kevin")); // Llama a la función greet
console.log(`El valor de PI es: ${PI}`); // Muestra la constante PI

const kevin = new Person("Kevin", 24); // Crea una instancia de la clase Person
console.log(kevin.introduce());

// Usa las exportaciones por defecto
console.log(defaultExports.defaultFunction());
console.log(defaultExports.defaultConstant);

const defaultClassInstance = new defaultExports.DefaultClass();
console.log(defaultClassInstance.greet());

// 9. Exporta una función, una constante y una clase desde una carpeta
export function helperFunction() {
  return "Soy la función del módulo helper.";
}

export const helperConstant = "Soy la constante del módulo helper.";

export class HelperClass {
  help() {
    return "Soy la clase del módulo helper.";
  }
}

// 10. Importa una función, una constante y una clase desde un directorio diferente
import { helperFunction, helperConstant, HelperClass } from "./utils/helper.js";

console.log(helperFunction()); // Usa la función del módulo helper
console.log(helperConstant); // Muestra la constante del módulo helper

const helperInstance = new HelperClass();
console.log(helperInstance.help()); // Usa la clase del módulo helper
