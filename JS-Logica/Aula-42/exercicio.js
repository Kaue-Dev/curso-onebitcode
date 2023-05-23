const imoveis = []
let opcao = ""

do {
    opcao = prompt(
        "Imóveis Cadastrados: " + imoveis.length +
        "\n\nEscolha uma das opções abaixo:" +
        "\n1. Salvar um imóvel" +
        "\n2. Ver imóveis salvos" +
        "\n3. Sair"
    )

    switch(opcao) {
        case "1":
            const salvarImovel = {}

            salvarImovel.nomeProprietario = prompt("Digite seu nome:")
            salvarImovel.quantidadeQuartos = prompt("Digite a quantidade de quartos:")
            salvarImovel.quantidadeBanheiros = prompt("Digite a quantidade de banheiros:")
            salvarImovel.possuiGaragem = prompt("Possui garagem? (S/N)")

            const confirmacao = confirm(
                "Salvar este imóvel?" +
                "\nProprietario: " + salvarImovel.nomeProprietario +
                "\nQuantidade de quartos: " + salvarImovel.quantidadeQuartos +
                "\nQuantidade de banheiros: " + salvarImovel.quantidadeBanheiros +
                "\nPossui garagem: " + salvarImovel.possuiGaragem
            )

            if (confirmacao) {
                imoveis.push(salvarImovel)
                alert("Imóvel salvo com sucesso")
            } else {
                alert("Voltando ao menu")
            }
            break
        
        case "2":
            for (let i = 0; i < imoveis.length; i++) {
                alert(
                    "Imóvel " + (i + 1) +
                    "\nProprietario: " + imoveis[i].nomeProprietario +
                    "\nQuantidade de quartos: " + imoveis[i].quantidadeQuartos +
                    "\nQuantidade de banheiros: " + imoveis[i].quantidadeBanheiros+
                    "\nPossui garagem: " + imoveis[i].possuiGaragem
                )
            }
            break
        
        case "3":
            alert("Sistema Encerrado")
            break
        
        default:
            alert("Escolha uma opção válida")
    }
    
} while (opcao !== "3");