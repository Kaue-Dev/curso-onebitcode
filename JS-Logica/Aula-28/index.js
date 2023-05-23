let opcao = " "

//do while sempre ira executar esse bloco de código independente de cumprir ou não a condição do while, mostrando as opções pro usuario sempre que a opção for diferente de 5
do { 
    opcao = prompt(
        "Seja bem-vindo(a) \n" +
        "Escolha uma das opções abaixo:" +
        "\n 1. Opção Um" +
        "\n 2. Opção Dois" +
        "\n 3. Opção Tres" +
        "\n 4. Opção Quatro" +
        "\n 5. Encerrar"
    )

    //switch case mostra qual opção o usuario escolheu e também previne que ele digite algo invalido
    switch (opcao) {
        case "1" :
            alert("Você escolheu a opção 1")
            break
        case "2" :
            alert("Você escolheu a opção 2")
            break
        case "3" :
            alert("Você escolheu a opção 3")
            break
        case "4" :
            alert("Você escolheu a opção 4")
            break
        case "4" :
            alert("Você escolheu a opção Encerrar")
            break
        default :
            alert("Opção invalida")
    }
} while (opcao !== "5") //Enquanto a opção escolhida for diferente de 5 o sistema continuara em looping