
// 1. Crea una clase que reciba dos propiedades

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hola, mi nombre es ${this.name} y tengo ${this.age} años.`;
  }

  static greet() {
    // METODO ESTATICO EJERCICIO(CREAR Y USARLO) //4 Y 5
    return "¡Hola! Este es un saludo estático.";
  }
}

let person = new Person("Kevin", 24);

console.log(person);
console.log(person.introduce());
console.log(Person.greet());

// 2. Añade un método a la clase que utilice las propiedades

class Person2 extends Person {
  constructor(name, age, size) {
    super(name, age);
    this.size = size;
  }

  introduce() {
    console.log(
      `Hola, mi nombre es ${this.name} y tengo ${this.age} años y mido ${this.size}`
    );
  }
}

let person2 = new Person2("Kevin", 33, "2,20");

console.log(person2);

// 3. Muestra los valores de las propiedades e invoca a la función

console.log("valores", person2);
person2.introduce();

// 6. Crea una clase que haga uso de herencia

class Person3 extends Person2 {
  constructor(name, age, size, culo) {
    super(name, age, size);
    this.culo = culo;
  }

  introduce() {
    console.log(
      `Hola, mi nombre es ${this.name} y tengo ${this.age} años y mido ${this.size}, y mi culo es ${this.culo}`
    );
  }
}

let newPerson3 = new Person3("kevin", 55, "1,44", "grande");
console.log(newPerson3);
newPerson3.introduce();

// 7. Crea una clase que haga uso de getters y setters, muestra sus valores, y prueba jugar con eso

class PrivatePerson {
  #bank;
  #dni;

  constructor(bank, dni) {
    this.#bank = bank;
    this.#dni = dni;
  }

  get bank() {
    return this.#bank;
  }

  set bank(bank) {
    this.#bank = bank;
  }

  get dni() {
    return this.#dni;
  }

  set dni(dni) {
    this.#dni = dni;
  }
}

let personprivada = new PrivatePerson("IBAN304394343", 533222009);
console.log(personprivada.dni); // y esto gracias al get
personprivada.bank = "new IBAN3904948u343"; // podemos hacer esto gracias al set

// 10. Sobrescribe un método de una clase que utilice herencia

class Person4 extends Person3 {
  constructor(name, age, size, culo, patron) {
    super(name, age, size, culo);
    this.patron = patron;
  }

  introduce() {
    console.log(
      `Hola, mi nombre es ${this.name} y tengo ${this.age} años y mido ${this.size}, y mi culo es ${this.culo}, y mi patron es ${this.patron}`
    );
  }
}
