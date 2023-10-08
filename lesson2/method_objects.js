const person = {
  userName: "Марк",
  age: 20,
  sayHi: function () {
    console.log(`Привет, ${this.userName} - ${this.age}`);
  },
};

for (let key in person) {
  console.log(person[key]);
}

