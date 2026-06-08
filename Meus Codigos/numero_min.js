const prompt = require('prompt-sync')()

function NumeroMin(x,y,z){
    let minimo
    if (x <= y && x <= z){
        minimo = x
    }
    else if (y <= x && y <= z){
        minimo = y
    }
    else{
        minimo = z
    }
    return(minimo)
}

console.log(NumeroMin())