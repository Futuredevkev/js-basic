let myArray = [1, 2, 3, 4];

let person = {
  name: "kevin",
  age: 37,
  alias: "kevin",
};

let myValue = myArray[1];
console.log(myValue);

let myName = person.name;
console.log(myName);

// Desestructuración

// Sintaxis arrays

let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray; // destructura por posicion
console.log(myValue0);
console.log(myValue1);
console.log(myValue2);
console.log(myValue3);
console.log(myValue4);

// Sintaxis arrays con valores predeterminados

let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0] =
  myArray;
console.log(myValue5);
console.log(myValue6);
console.log(myValue7);
console.log(myValue8);
console.log(myValue9);

// Ignorar elementos array

let [myValue10, , , myValue13] = myArray;
console.log(myValue10);
console.log(myValue13);

// Sintaxis objects

let { name, age, alias } = person;
console.log(name);
console.log(age);
console.log(alias);

// Sintaxis objects con valores predeterminados

let { name2, age2, alias2, email = "email@email.com" } = person; // destructura por clave
console.log(name2); // No existe
console.log(age2); // No existe
console.log(alias2); // No existe
console.log(email);

// Sintaxis objects con nuevos nombres de variables

let { alias: alias3, name: name3, age: age3 } = person; // doble punto : PARA PONERLE UN NUEVO NOMBRE A LA VARIABLE QUE QUIERO DESTRUCTURAR
console.log(name3);
console.log(age3);
console.log(alias3);

// Objects anidados

let person3 = {
  name: "kevin",
  age: 37,
  alias: "kevin",
  walk: function () {
    console.log("La persona camina.");
  },
  job: {
    name: "Programador",
    exp: 15,
    work: function () {
      console.log(`La persona de ${this.age} años de experiencia trabaja.`);
    },
  },
};

let {
  name: name4,
  job: { name: jobName },
} = person3;

console.log(name4);
console.log(jobName);

// Propagación (...)

// Sintaxis arrays

let myArray2 = [...myArray, 5, 6]; // creamos un nuevo array con los valores de myarray y le añadimos 5 y 6, pero en otro array sin modificar el original

console.log(myArray2);

// Copia de arrays

let myArray3 = [...myArray, ...array2];
console.log(myArray3);

console.log(myArray3);

// Combinación de arrays

let myArray4 = [...myArray, ...myArray2, ...myArray3]; // combinamos todos los valores de esos arrays, y hacemos una copia de todo sin modificar el original

console.log(myArray4);

// Sintaxis objects // lo mismo pero con objectos

let person4 = { ...person, email: "kevinkevin@kevin.com" }; // lo mismo pero con objetos

console.log(person4);

// Copia de objects

let person5 = { ...person };

console.log(person5);
