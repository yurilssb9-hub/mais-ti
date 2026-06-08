const prompt = require('prompt-sync')()

function verificaIdade(idade){
    if (idade >= 60){
        console.log("Idoso")
    }
    else if (idade >=18 ){
        console.log("Maior de Idade")
    }
    else{
        console.log("Menor de Idade")
    }
}
let idade = prompt("Digite a sua idade: ")
verificaIdade(idade)