const defaultB = 30
const getDefaul = c => c **2


function computer(a,b=getDefaul(a)) {
    return a+b
}

console.log(computer(20))