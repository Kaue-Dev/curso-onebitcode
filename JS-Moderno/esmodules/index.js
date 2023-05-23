//Importa funções de outros arquivos
import { label, input, br } from "./functions.js";

console.log(label({ 
    for: 'fullname', 
    textContent: 'Nome Completo'
}))

console.log(input({ 
    id: 'fullname',  
    placeholder: 'Digite seu nome completo...'
}))

console.log(br())