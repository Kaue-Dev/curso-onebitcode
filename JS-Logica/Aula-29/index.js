let saldo = parseFloat(prompt("Informe o saldo inicial:"))
let opcao = " "
let adicionar = " "
let remover = " "

do {
    opcao = prompt(
        "Seu saldo é de: R$ " + saldo +
        "\nEscolha uma das opções abaixo:" +
        "\n1. Adicionar" +
        "\n2. Remover" +
        "\n3 Sair"
    )
    
    if (opcao === "1") {
        adicionar = parseFloat(prompt("Quanto deseja adicionar?"))
        saldo += adicionar
    } else if (opcao === "2") {
        remover = parseFloat(prompt("Quanto deseja remover?"))
        saldo -= remover
    } else {
        alert("Sistema encerrado")
    }

} while(opcao !== "3")