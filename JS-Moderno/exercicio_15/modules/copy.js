import { resultInput } from "../index.js";

export function copyToClipboard() {
    const copyButton = document.getElementById("copyToClipboard")
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
}