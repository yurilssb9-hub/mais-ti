const prompt = require ("prompt-sync")()

function parImpar(numero){
    if (numero % 2 == 0){
        console.log("Par")
    }
    else {
        console.log("Ímpar")
    }
};
let numero = prompt("Digite um número: ")
parImpar(numero)