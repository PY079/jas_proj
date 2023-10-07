function Summ(a, b) {
  return typeof a === "number" && typeof b == "number"
    ? a + b
    : "Нужно передать только числа";
}

/*(function Summ(a, b) {
    //   return typeof a === "number" && typeof b == "number" ? a + b : "Нужно передать только числа";
     console.log(
      typeof a === "number" && typeof b == "number"
        ? a + b
        : "Нужно передать только числа"
    );
  })(1,2);
  
  console.log(Summ(10, 20));*/

// console.log(Summ(10, 20));

const Age2 = (age) => age+age;
console.log(Age2(13));




