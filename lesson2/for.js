const list = [];
list.push("имя1", "имя2", "имя3", "имя4");

// начальное число, до какого числа, шаг i

// for (let i = 0; i<10; i+=1){
// console.log(i)
// }

// for (let item of list) {
  // console.log(item);
// }

list.forEach(function(item,index){
  console.log(item,index)
})