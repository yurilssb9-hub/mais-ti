// Faça um programa em JavaScript que simule um sistema de gerenciamento de estoque de produtos utilizando menu no terminal.
// O sistema deverá permitir o cadastro de produtos e consultas sobre o estoque.

// Cada produto deverá conter: nome, preço, quantidade em estoque e categoria.

// O programa deverá apresentar um menu com as seguintes opções:

// [1] Cadastrar produto — permite adicionar um novo produto ao sistema, solicitando todas as suas informações.
// [2] Revisar estoque — exibe todos os produtos que estão em situação de escassez, ou seja, com quantidade em estoque menor que 5 unidades.
// [3] Buscar produto — solicita o nome de um produto e exibe o valor total em estoque desse produto, calculado como preço multiplicado pela quantidade.
// [4] Relatório geral — exibe todos os produtos cadastrados, mostrando seus dados e também a média de preço dos produtos cadastrados.
// [5] Sair — encerra o programa.

// O sistema deve funcionar em loop, permitindo que o usuário execute várias operações até escolher a opção de saída.


const prompt = require("prompt-sync")();

let opcao; 

do {
    console.log("\n===== MENU =====");
    console.log("[1] Cadastrar produto");
    console.log("[2] Produtos em escassez");
    console.log("[3] Buscar valor total por nome");
    console.log("[4] Relatório geral");
    console.log("[5] Sair");

    opcao = Number(prompt("Escolha uma opção: "));

    switch (opcao) {

        case 1:
            console.log("\n[Cadastrar produto]");
            break;

        case 2:
            console.log("\n[Produtos em escassez]");
            break;

        case 3:
            console.log("\n[Buscar produto]");
            break;

        case 4:
            console.log("\n[Relatório geral]");
            break;

        case 5:
            console.log("\nSaindo do programa...");
            break;

        default:
            console.log("\nOpção inválida!");
    }

} while (opcao !== 5);