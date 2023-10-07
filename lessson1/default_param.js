const defaultB = 30
const getDefaul = c => c **2


function compute(a,b=getDefaul(a)) {
    return a+b
}

console.log(compute(20))

