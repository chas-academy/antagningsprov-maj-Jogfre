class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

function whoIsOverThirty(peopleArray) {
  peopleArray.forEach((person) => {
    if (typeof person !== "object") return;

    if (person.age > 30) {
      console.log(person.name);
    }
  });
}

function uppg8() {
  // skapa en array med fem person obkjet
  // varje person objekt ska ha två properties, name och age

  // skapa en fuktion som tar in en array som argument
  // skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
  //  över 30 år som skrivs ut i konsolen

  // anropa funktionen och skicka med arrayen som argument
  const people = [
    new Person("Alice", 29),
    new Person("Bob", 22),
    new Person("Hugo", 33),
    new Person("Anna", 41),
    new Person("Karoline", 18),
  ];

  whoIsOverThirty(people);
}

module.exports = { uppg8 };
