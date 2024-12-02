

// 1. Usa desestructuración para extraer los dos primeros elementos de un array

const array1 = [10, 30, 40];
const array2 = [100, 500, 900];

let [myValue0, myValue1] = array1;

console.log(myValue0, myValue1);

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let [miValor0, miValor1, , miValor3 = 50] = array1;

console.log(miValor0, miValor0, miValor3);

// 3. Usa desestructuración para extraer dos propiedades de un objeto

let object = {
  name: "kevin",
  lastname: "moreira",
  age: 33,
  job: {
    exp: 15,
    name: "infodalten",
  },
};

let object2 = {
  asa: "aaa",
  asaaa: "moressaira",
  asaaaa: 333,
  jobs: {
    exps: 155,
    names: "infodalten2",
  },
};

let { name, lastname, age } = object;

console.log(name, lastname, age);

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let { name: name2, lastname: lastname2 } = object;

console.log(name2, lastname2);

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let {
  name: name3,
  job: { exp: jobExperience },
} = object;

console.log(name3, jobExperience);

// 6. Usa propagación para combinar dos arrays en uno nuevo

let newArray = [...array1, ...array2];
console.log(newArray);

// 7. Usa propagación para crear una copia de un array

let copy = [...array1];

console.log(copy);

// 8. Usa propagación para combinar dos objetos en uno nuevo

let newObject = { ...object, ...object2 };
console.log(newObject);

// 9. Usa propagación para crear una copia de un objeto

let copyObject = { ...object };
console.log(copyObject);

// 10. Combina desestructuración y propagación

let { name: nameJeje, lastname: lastnameJeje, age: ageJeje, ...rest } = object; // rest te saca todo el objeto

console.log("here", rest);
