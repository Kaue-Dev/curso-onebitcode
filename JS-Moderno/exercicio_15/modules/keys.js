import { input } from "../index.js";
import { calculate } from "./calculate.js";

export function keysEvent(ev) {
    //Previnindo o comportamento padrão
    ev.preventDefault()
    //Lista contendo apenas as teclas que poderão ser digitadas 
    const allowedKeys = [
        "(", ")",
        "/", "*", "-", "+", 
        "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", 
        ".", "%", " "
    ]
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
}