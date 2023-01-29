class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  methodEat() {
    return `${this.name} is eating!`;
  }
}

class Cat extends Pet {
  constructor(name, age, lives) {
    super(name, age);
  methodMeow() {
    return `${this.name} is meowing!`;
  }
}

class Dog extends Pet {
  methodBark() {
    return `${this.name} is barking!`;
  }
}
