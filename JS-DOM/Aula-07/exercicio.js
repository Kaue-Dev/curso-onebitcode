function escalar() {
    //Referencia os inputs do html e armazena o valor digitado em uma váriavel
    const posicaoInput = document.getElementById("posicao-input")
    const posicaoValor = posicaoInput.value

    const nomeInput = document.getElementById("nome-input")
    const nomeValor = nomeInput.value

    const camisaInput = document.querySelector(".camisa-input")
    const camisaValor = camisaInput.value

    //Criando a confirmação
    const confirmacao = confirm("Escalar " + nomeValor + " como " + posicaoValor + "?")

    if (confirmacao) {
        //Referencia a section onde tudo ficará armazenado
        const sectionEscalados = document.getElementById("jogadores-escalados")

        //Cria um titulo h3 para cada jogador
        const h3 = document.createElement("h3")
        h3.innerText = "Jogador:"

        //Cria uma ul onde ficarão as informações de cada jogador
        const listaEscalados = document.createElement("ul")
        
        //Cria os li e também os parágrafos para armazenar as informações 
        const posicaoLi = document.createElement("li")
        const posicaoP = document.createElement("p")
        //Exibe as informações digitadas no input
        posicaoP.innerText = "Posição: " + posicaoValor

        //Organiza os elementos filhos
        posicaoLi.appendChild(posicaoP)
        listaEscalados.appendChild(posicaoLi)

        const nomeLi = document.createElement("li")
        const nomeP = document.createElement("p")
        nomeP.innerText = "Nome: " + nomeValor

        nomeLi.appendChild(nomeP)
        listaEscalados.appendChild(nomeLi)

        const camisaLi = document.createElement("li")
        const camisaP = document.createElement("p")
        camisaP.innerText = "N° Camisa: " + camisaValor

        camisaLi.appendChild(camisaP)
        listaEscalados.appendChild(camisaLi)

        //Define o título h3 e a ul que contém todas as informações como filhos da section
        sectionEscalados.append(h3, listaEscalados)

        //Deixa os campos do input vazios após clicar no botão
        document.getElementById("posicao-input").value = " "
        document.getElementById("nome-input").value = " "
        document.querySelector(".camisa-input").value = " "
    }
}

function remover() {
    const sectionEscalados = document.getElementById("jogadores-escalados")

    const h3Titles = document.getElementsByTagName("h3")
    const ulJogador = document.getElementsByTagName("ul")

    sectionEscalados.removeChild(h3Titles[h3Titles.length - 1])
    sectionEscalados.removeChild(ulJogador[ulJogador.length - 1])
}