const prompt = require ("prompt-sync")()

function maiorIdade(idade){
    if (idade >= 18){
        console.log("Maior de Idade")
    }
}

let idade = prompt("Digite a sua idade: ")

maiorIdade(idade)