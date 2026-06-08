const prompt = require("prompt-sync")();

class Paciente{
    constructor(nomePaciente, senhaPaciente){
        this.nome = nomePaciente
        this.senha = senhaPaciente
        
    }
}

class Gernciar_consulta{
    constructor(){
        this.proximaSenha = 1
        this.fila = []
    }

    adicionar(nomePaciente){
        let pessoa = new Paciente(nomePaciente, this.proximaSenha)
        this.fila.push(pessoa)
        this.proximaSenha++;
    }

    chamar(){
        let pessoaRemovida = this.fila.shift()
        console.log("Senha: " + pessoaRemovida.senha, "Nome: " + pessoaRemovida.nome)
    }
}

const gerente = new Gernciar_consulta();

gerente.adicionar("João");
gerente.adicionar("Fabio")
gerente.adicionar("Janio")

console.log("Fila Atual: " + gerente.fila)

gerente.chamar()
gerente.chamar()

gerente.adicionar("P")
gerente.adicionar("")