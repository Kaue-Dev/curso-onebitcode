//inicialização ; condição ; finalização
/*/for (let i = 0 ; i <= 5 ; i++) {
    alert(i)
}*/

const palavra = prompt("Digite alguma palavra:")
let palavraInvertida = ""

for (let i = palavra.length - 1 ; i >= 0 ; i--) {
    palavraInvertida = palavraInvertida + palavra[i]
}

if (palavra === palavraInvertida) {
    alert(palavra + " É um palindromo!")
} else {
    alert(
        palavra + " Não é um palindromo \n\n" + 
        palavra + " é diferente de " + palavraInvertida
        ) 
}