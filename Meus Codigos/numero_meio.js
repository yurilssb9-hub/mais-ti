const prompt = require("prompt-sync")()

function NumeroMeio(a, b, c){
    let meio;
    if ((a >= b && a <= c)||(a <= b && a >= c)){
        meio = a
    }
    else if ((b >= a && b <= c)||(b <= a && b >= c)){
        meio = b
    }
    else
    {
        meio = c
    }
    return(meio)
}
console.log(NumeroMeio(3,4,5))
console.log(NumeroMeio(5,5,5))
console.log(NumeroMeio(5,4,3))
console.log(NumeroMeio(4,5,5))
console.log(NumeroMeio(5,5,4))