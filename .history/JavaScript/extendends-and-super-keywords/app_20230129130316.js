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
  constructor(name, age, livesLeft = 9) {
    super(name, age); // calls the superclass constructor instead of your own(that have the preference)
    this.livesLeft = livesLeft;
  methodMeow() {
    return `${this.name} is meowing!`;
  }
}

class Dog extends Pet {
  methodEat(){
    return `${this.name} is eating!`;
  }
  
  methodBark() {
    return `${this.name} is barking!`;
  }
}
