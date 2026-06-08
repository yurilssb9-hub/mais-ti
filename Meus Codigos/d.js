const prompt = require('prompt-sync')();

function buscaSimples(lista, numero){
    for(let item of lista){
        if (item == numero){
            console.log("Valor: ", item);
            console.log("Índice: ", lista.indexOf(item));
            break;
        }
    }
}

buscaSimples([4, 8, 7, 1, 6, 7], 7,)