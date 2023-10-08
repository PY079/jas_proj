class Person {
  constructor(userName, age) {
    this.userName = userName;
    this.age = age;
  }
  sayHi(name){
    console.log(`Привет, ${name}. Меня зовут ${this.userName} - ${this.age}`)
  }
}

const person1 = new Person("Марк", 20);
person1.sayHi('Юрий');
