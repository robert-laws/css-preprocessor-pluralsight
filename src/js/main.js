const name = "bob";
let guy = "hal";

class Person {
  constructor(name) {
    this.name = name;
  }

  showName() {
    return `hello, ${this.name}`;
  }
}

