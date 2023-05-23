import { input, resultInput } from "../index.js";

export function clearInput() {
    //Torna o value do input vazio
    input.value = ""
    //Torna o value do input de resultados vazio
    resultInput.value = ""
    //Remove a classe "error" do input de resultados
    resultInput.classList.remove("error")
    //Retorna o foco para a caixa de input para o usuario voltar a digitar
    input.focus()
}