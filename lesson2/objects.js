const age = 20;
const Name = "Марк";

const dict = {
  name: Name,
  age: age,
};

console.log(dict);

dict.lang = "Java Script";

console.log(dict);
delete dict.lang;
console.log(dict);



