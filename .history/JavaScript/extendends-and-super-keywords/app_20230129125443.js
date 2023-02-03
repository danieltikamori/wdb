class Pet 


class Cat {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  methodEat() {
    return `${this.name} is eating!`;
  }
  methodMeow(){
    return `${this.name} is meowing!`;
  }
}

class Dog {
  constructor(name, age) {
    this.name = name;
    this.age = age;
}
  methodEat() {
    return `${this.name} is eating!`;
}
methodBark() {
  return `${this.name} is barking!`;
}
}
