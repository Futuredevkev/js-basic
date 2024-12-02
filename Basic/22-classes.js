// Clases

class Person {
  constructor(name, age, alias) {
    this.name = name;
    this.age = age;
    this.alias = alias;
  }
}

// Sintaxis

let person = new Person("kevin", 37, "kevin");
let person2 = new Person("kevin", 37, "kevin");

console.log(person);
console.log(person2);

console.log(typeof person);

// Valores por defecto

class DefaultPerson {
  constructor(name = "Sin nombre", age = 0, alias = "Sin alias") {
    this.name = name;
    this.age = age;
    this.alias = alias;
  }
}

let person3 = new DefaultPerson("kevin", 37);

console.log(person3);

// Acceso a propiedades

console.log(person3.alias);
console.log(person3["alias"]);

person3.alias = "kevin";

console.log(person3.alias);

// Funciones en clases

class PersonWithMethod {
  constructor(name, age, alias) {
    this.name = name;
    this.age = age;
    this.alias = alias;
  }

  walk() {
    console.log("La persona camina.");
  }
}

let person4 = new PersonWithMethod("kevin", 37, "kevin");
person4.walk();

// Propiedades privadas

class PrivatePerson {
  #bank; // inicializamos una propiedad privada para despues pasarla al constructor

  constructor(name, age, alias, bank) {
    this.name = name;
    this.age = age;
    this.alias = alias;
    this.#bank = bank;
  }

  pay() {
    this.#bank;
  }
}

let person5 = new PrivatePerson("kevin", 37, "kevin", "IBAN123456789");

// No podemos acceder
// console.log(person5.bank)
// person5.bank = "new IBAN123456789" // bank no es #bank

console.log(person5);

// Getters y Setters, obtener o establecer, dejar hacer solo una accion en la privacidadd

class GetSetPerson {
  #name;
  #age;
  #alias;
  #bank;

  constructor(name, age, alias, bank) {
    this.#name = name;
    this.#age = age;
    this.#alias = alias;
    this.#bank = bank;
  }

  get name() { //obtener
    return this.#name;
  }

  set bank(bank) { // establecer
    this.#bank = bank;
  }
}

person6 = new GetSetPerson("kevin", 37, "kevin", "IBAN123456789");

console.log(person6);
console.log(person6.name);

person6.bank = "new IBAN123456789";




// Herencia

class Animal {
  constructor(name) {
    this.name = name;
  }

  sound() {
    console.log("El animal emite un sonido genérico");
  }
}

class Dog extends Animal { // hereda las propiedades de animal
  sound() {
    console.log("Guau!");
  }

  run() {
    console.log("El perro corre");
  }
}

class Fish extends Animal {
  constructor(name, size) {
    super(name); // super hace una llamada a el nombre del constructor de animal, pero podemos igual reescribir
    this.size = size;
  }

  swim() {
    console.log("El pez nada");
  }
}

let myDog = new Dog("kevinDog");
myDog.run();
myDog.sound();

let myFish = new Fish("kevinFish", 10);
myFish.swim();
myFish.sound();

// Métodos estáticos

class MathOperations {
  static sum(a, b) {
    return a + b;
  }
}

console.log(MathOperations.sum(5, 10));
