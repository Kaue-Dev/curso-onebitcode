function calcular(a, b, operacao) {
    console.log("Realizando uma operação");
    const resultado = operacao(a, b)
    return resultado
}

function somar(x, y) {
    console.log("Realizando uma soma");
    return x + y
}

calcular(3, 5, somar)





function exibirElemento(elemento, indice, array) {
    console.log({elemento, indice, array})
}
const lista = [
    "Maça",
    "Banana",
    "Laranja",
    "Limao"
]
lista.forEach(exibirElemento)