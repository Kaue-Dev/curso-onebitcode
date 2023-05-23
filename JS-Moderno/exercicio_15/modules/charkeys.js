import { input } from "../index.js";

export function charKeysValue(charKeysButtons) {
    //Adicionar um evento para quando as teclas forem clicadas
    charKeysButtons.addEventListener("click", function() {
        //Cria uma variavel e armazena nela o valor do data-value
        const charKeyValue = charKeysButtons.dataset.value
        //Atribui o valor recebido na variavel charKeyValue como valor do input onde o usuario digita as operações
        input.value += charKeyValue
    })
}