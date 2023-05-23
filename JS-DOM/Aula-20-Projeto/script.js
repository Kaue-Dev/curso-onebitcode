const main = document.querySelector("main")
const root = document.querySelector(":root")

//Referencia todas as teclas de characteres
const charKeys = document.querySelectorAll(".charKey")

//Referenciando o input onde o usuario ira digitar e o input onde o resultado ira aparecer
const input = document.getElementById("input")
const resultInput = document.getElementById("result")

//Lista contendo apenas as teclas que poderão ser digitadas 
const allowedKeys = [
    "(", ")",
     "/", "*", "-", "+", 
     "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", 
     ".", "%", " "
]

//Percorre todas as teclas de characteres usando o forEach()
charKeys.forEach(function (charKeysButtons) {
    //Adicionar um evento para quando as teclas forem clicadas
    charKeysButtons.addEventListener("click", function() {
        //Cria uma variavel e armazena nela o valor do data-value
        const charKeyValue = charKeysButtons.dataset.value
        //Atribui o valor recebido na variavel charKeyValue como valor do input onde o usuario digita as operações
        input.value += charKeyValue
    })
})

//Referencia o botão C e adicionar um evento de click para limpar o input onde o usuario digita a operação
document.getElementById("clear").addEventListener("click", function () {
    //Torna o value do input vazio
    input.value = ""
    //Torna o value do input de resultados vazio
    resultInput.value = ""
    //Remove a classe "error" do input de resultados
    resultInput.classList.remove("error")
    //Retorna o foco para a caixa de input para o usuario voltar a digitar
    input.focus()
})

//Referencia o botão de = e  adiciona um evento de click que chama a função para calcular
document.getElementById("equal").addEventListener("click", calculate)

//Evento para quando uma tecla for pressionada
input.addEventListener("keydown", function(ev) {
    //Previnindo o comportamento padrão
    ev.preventDefault()

    //Verifica se a tecla pressionada está dentro da lista de teclas que podem ser digitadas
    if (allowedKeys.includes(ev.key)) {
        //Se a tecla pressionada estiver inclusa na lista, o valor do input recebe a tecla pressionada
        input.value += ev.key
        return
    }

    //Verifica se a tecla pressionada é o "Backspace"
    if (ev.key === "Backspace") {
        //Pega o valor atual do input e apaga o último caractere digitado utiliando o .slice()
        input.value = input.value.slice(0, -1)
    }

    //Verifica se a tecla pressionada é o "Enter"
    if (ev.key === "Enter") {
        //Chama a função de calcular
        calculate()
    }
})

function calculate() {
    //Atribui "ERROR" como valor para o input de resultados
    resultInput.value = "ERROR"
    //Adiciona a classe "error" ao input de resultados
    resultInput.classList.add("error")
    //Le o input do usuario como uma string de código válido usando o eval
    const result = eval(input.value)
    //Define a variavel "result" como value do input de resultados 
    resultInput.value = result
    //Remove a classe "error" do input de resultados
    resultInput.classList.remove("error")
}

//Referencia o botão que trocar o tema
const themeSwitcherButton = document.getElementById("themeSwitcher")
//Evento para quando o botão for clicado
themeSwitcherButton.addEventListener("click", function() {
    //Se a tag main possuir o data-theme="dark" irá alterar a cor dos elementos através do :root e também ira definir o data-theme="light"
    if (main.dataset.theme === "dark") {
        root.style.setProperty("--bg-color", "#FFF")
        root.style.setProperty("--border-color", "#aaa")
        root.style.setProperty("--font-color", "#121212")
        root.style.setProperty("--primary-color", "#26834a")
        main.dataset.theme = "light"
    } else {
        root.style.setProperty("--bg-color", "#121212")
        root.style.setProperty("--border-color", "#666")
        root.style.setProperty("--font-color", "#FFF")
        root.style.setProperty("--primary-color", "#4dff91")
        main.dataset.theme = "dark"
    }
})

//Referenciando o botão de copiar para area de transferencia
const copyButton = document.getElementById("copyToClipboard")
//Criando evento para quando o botão for clicado
copyButton.addEventListener("click", function() {
    //Verifica se o texto do botão está como "copy"
    if (copyButton.innerText === "Copy") {
        //Altera o texto do botão para "copied"
        copyButton.innerText = "Copied"
        //Adicionar uma classe ao botão
        copyButton.classList.add("success")

        //Salva no clipboard do usuario o valor do input de resultados
        navigator.clipboard.writeText(resultInput.value)
    } else {
        copyButton.innerText = "Copy"
        copyButton.classList.remove("success")
    }
})