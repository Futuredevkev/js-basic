// 1. Crea un función que utilice error correctamente

function logError(message) {
  console.error(`Error: ${message}`);
}

logError("Algo salió mal al procesar los datos.");

// 2. Crea una función que utilice warn correctamente

function logWarning(message) {
  console.warn(`Advertencia: ${message}`);
}

logWarning("Este método está obsoleto.");

// 3. Crea una función que utilice info correctamente

function logInfo(message) {
  console.info(`Información: ${message}`);
}

logInfo("El proceso ha terminado correctamente.");

// 4. Utiliza table

const data = [
  { name: "Kevin", age: 24 },
  { name: "Laura", age: 30 },
  { name: "Ana", age: 22 },
];

console.table(data);

// 5. Utiliza group

console.group("Grupo de mensajes");
console.log("Este es el primer mensaje del grupo.");
console.warn("Advertencia dentro del grupo.");
console.error("Error dentro del grupo.");
console.groupEnd();

// 6. Utiliza time

console.time("Timer");
setTimeout(() => {
  console.timeEnd("Timer");
}, 2000);

// 7. Valida con assert si un número es positivo

function validatePositiveNumber(number) {
  console.assert(number > 0, `El número ${number} no es positivo.`);
}

validatePositiveNumber(10); // No se muestra nada
validatePositiveNumber(-5); // Lanza un assert

// 8. Utiliza count

function logCount(label) {
  console.count(label);
}

logCount("Evento");
logCount("Evento");
logCount("Evento");

// 9. Utiliza trace

function traceFunction() {
  console.trace("Rastreo de la función.");
}

function anotherFunction() {
  traceFunction();
}

anotherFunction();

// 10. Utiliza clear

console.log("Este mensaje será borrado en breve...");
console.clear();
