const nomeTurista = prompt("Digite seu nome:")
const pergunta = prompt("Você já visitou alguma cidade? (sim/não)")
let cidadesVisitadas = " "

//Se a resposta da primeira pergunta for não, o código já é encerrado
if (pergunta === "não") {
    alert(nomeTurista + " não visitou nenhuma cidade")
}

//Estrutura de repetição caso a resposta da primeira pergunta seja sim
while (pergunta === "sim") {
    let cidadeVisitada = prompt("Que cidade você já visitou?")
    cidadesVisitadas += " - " + cidadeVisitada + "\n"
    const repetirPertunta = prompt("Você já visitou alguma outra cidade? (sim/não)")

    //Quando a resposta for não, é exibida uma lista com os nomes das cidades visitadas
    if (repetirPertunta === "não") {
        alert(
            nomeTurista + " já visitou as seguintes cidades: \n" +
            cidadesVisitadas
        )
        break //Encerra o looping da estrutura de repetição
    }
}