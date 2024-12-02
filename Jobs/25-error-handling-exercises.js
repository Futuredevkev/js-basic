

// 1. Captura una excepción utilizando try-catch
let miError;

try {
  console.log(miError.email);
  console.log("Finaliza sin errores");
} catch (error) {
  console.log("El error es", error);
}

// 2. Captura una excepción utilizando try-catch y finally

try {
  console.log(miError.email);
  console.log("Finaliza sin errores");
} catch (error) {
  console.log("El error fue:", error);
} finally {
  console.log("Esto se ejecuta siempre al finalizar");
}

// 3. Lanza una excepción genérica

function doSomething() {
  throw new Error("Ocurrió un error inesperado");
}

try {
  doSomething();
} catch (error) {
  console.log(error.message);
}

// 4. Crea una excepción personalizada

class ErrorSum extends Error {
  constructor(message, a, b) {
    super(message);
    this.a = a;
    this.b = b;
  }

  printNumbers() {
    console.log(this.a, " + ", this.b);
  }
}

try {
  console.log(sumIntegers(0, 10));
} catch (error) {
  console.log("Se ha producido un error personalizado:", error.message);
  error.printNumbers();
}

// 5. Lanza una excepción personalizada

function sumIntegers(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Esta operación sólo suma números");
  }
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error("Esta operación sólo suma números enteros");
  }
  if (a == 0 || b == 0) {
    throw new SumZeroIntegerError("Se está intentando sumar cero", a, b);
  }
  return a + b;
}

// 6. Lanza varias excepciones según una lógica definida, y capturar varias exepciones

try {
  console.log(sumIntegers("5", 10));
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Se ha producido un error de tipo:", error.message);
  } else if (error instanceof Error) {
    console.log("Se ha producido un error:", error.message);
  }
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

const values = ["123.45", "abc", 567, null, undefined, "45.67.89"];

for (const value of values) {
  try {
    const floatValue = parseFloat(value);
    if (isNaN(floatValue)) {
      throw new Error(`No se puede convertir "${value}" a float.`);
    }
    console.log(`Valor convertido a float: ${floatValue}`);
  } catch (error) {
    console.error(`Error al procesar el valor "${value}": ${error.message}`);
  }
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

function verifyProperty(obj, property) {
  if (!obj.hasOwnProperty(property)) {
    throw new Error(`El objeto no tiene la propiedad "${property}".`);
  }
  return `La propiedad "${property}" está presente.`;
}

try {
  const obj = { name: "Kevin", age: 24 };
  console.log(verifyProperty(obj, "name")); // Propiedad presente
  console.log(verifyProperty(obj, "height")); // Lanza excepción
} catch (error) {
  console.error(`Error: ${error.message}`);
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

function retryOperation(operation, maxRetries = 10) {
  let attempts = 0;
  while (attempts < maxRetries) {
    try {
      return operation();
    } catch (error) {
      attempts++;
      console.error(`Intento ${attempts} fallido: ${error.message}`);
    }
  }
  throw new Error(`Operación fallida después de ${maxRetries} intentos.`);
}

// Ejemplo de uso
let count = 0;
function unstableOperation() {
  count++;
  if (count < 5) {
    throw new Error("Operación inestable. Inténtalo de nuevo.");
  }
  return "Operación exitosa!";
}

try {
  const result = retryOperation(unstableOperation);
  console.log(result);
} catch (error) {
  console.error(`Error final: ${error.message}`);
}
