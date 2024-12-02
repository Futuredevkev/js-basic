

// 1. Crea un objeto con 3 propiedades

const object = {
  name: "Kevin",
  lastname: "Moreira",
  age: 20,
};

// 2. Accede y muestra su valor

console.log(object.name);
console.log(object.lastname);
console.log(object.age);

// 3. Agrega una nueva propiedad

object.color = "negro";

console.log(object);

// 4. Elimina una de las 3 primeras propiedades

delete object.age;

console.log(object);

// 5. Agrega una función e invócala

const object2 = {
  name: "jose",
  lastname: "se fue",
  age: 55,
  walk: function () {
    console.log("estoy caminando viejo");
  },
};

object2.walk();

// 6. Itera las propiedades del objeto

for (let key in object) {
  console.log(key + ": " + object[key]);
}

// 7. Crea un objeto anidado

const objectAnidado = {
  name: "Kevin",
  lastname: "pedrito",
  age: 60,
  walk: function () {
    console.log("La persona camina.");
  },
  job: {
    name: "programador",
    exp: 50,
    work: function () {
      console.log(`La persona de ${this.age} años de experiencia trabaja.`);
    },
  },
};

// 8. Accede y muestra el valor de las propiedades anidadas

console.log(objectAnidado.job.name);
console.log(objectAnidado.job.exp);

// 9. Comprueba si los dos objetos creados son iguales

console.log(object === objectAnidado); // esto no se puede...

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(object.name === objectAnidado.name);
