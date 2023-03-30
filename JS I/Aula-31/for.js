//inicialização ; condição ; finalização
/*/for (let i = 0 ; i <= 5 ; i++) {
    alert(i)
}*/

const numero = prompt("Escolha um número:")
let resultados = ""

for (let i = 1 ; i <= 20 ; i++) {
    resultados += numero + " * " + i + " = " + (numero * i) + "\n"
}

alert("Resultado da tabuada: \n" + resultados)