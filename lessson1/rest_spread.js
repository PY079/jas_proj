//rest

function average(a,b,...args) {
    return args.reduce((acc, i)=> acc += i, 0) / args.length
    
}
// console.log(average(10,20,30,40))


// spread

// const array = [1,2,3,5,13]

// console.log(...array) // развернуть массив

// console.log(Math.max(...array))

// const fib =[1,...array]

// console.log(fib)



// диструкциализация

// const array = [1,2,3,5,13]
// const [a,b,...c] = array
// console.log(a,b,c) // 1 2

// объект

const adress = {
    conutry: 'Russia',
    city: 'Moscow',
    concat: function() {
        return `${this.conutry}, ${this.city}`
        
    }
}
// console.log(adress.concat())

// const {city, conutry, concat} = adress

// console.log(concat.call(adress))

const {city, ...rest} = adress
console.log(city)
console.log(rest)

const newAdres = {...adress}
console.log(newAdres)
