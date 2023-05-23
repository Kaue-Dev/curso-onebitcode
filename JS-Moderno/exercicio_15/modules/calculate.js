import { resultInput } from "../index.js";

export function calculate() {
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
