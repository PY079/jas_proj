let int = 36
let float = 36.6
let str = 'str'
const bool = true // Не изменяемый тип -  const
let array = [] // list
let obj = {} // dict

obj.key = 'что-то рандомное'


console.log('Значения:\t',int, float, str, bool)
console.log('Типы:\t\t',typeof(int),typeof(float),typeof(str),typeof(bool)) // numb numb str bool
console.log('Типы списков:',typeof(array),typeof(obj)) // object object

function name(value) {
    console.log(value)
}

name(obj)
console.log(obj['key'])



