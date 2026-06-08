const prompt = require ("prompt-sync")();

class Casa {
    constructor(num_quart, num_ban, area, ano) {

        this.quartos = num_quart;
        this.banheiros = num_ban;
        this.tamanho = area;
        this.ano_construc = ano;
    }
    idade(ano_construc){
        return ano_atual - this.ano_construc
    }
}

let Casa = new Casa ("4", "1", "20", "1988")
let ano_atual = 2026
console.log(idade)