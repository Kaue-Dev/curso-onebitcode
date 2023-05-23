const baralho = []
let opcao = ""

do {
    opcao = prompt(
        "Número de cartas: \n" + baralho.length +
        "\nEscolha uma das opções abaixo:" +
        "\n1. Adicionar carta" +
        "\n2. Puxar carta" +
        "\n3. Sair"
    )

    switch (opcao) {
        case "1":
            const adicionarCarta = prompt("Qual carta deseja adicionar:")
            baralho.push(adicionarCarta)
            break

        case "2":
            ultimaCarta = baralho.pop()
            let puxarCarta = ""
            if (!ultimaCarta) {
                alert("Não existem cartas para puxar")
            } else {
                puxarCarta = alert("Carta puxada: " + ultimaCarta)
            }
            break

        case "3":
            alert("Sistema Encerrado")
            break
            
        default:
            alert("Escolha uma opção válida")
    }
    
} while (opcao !== "3");