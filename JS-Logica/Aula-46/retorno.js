function calcularMedia (a, b) {
    const media = (a + b) / 2
    return media
}
const resultado = calcularMedia(8, 8)
console.log(resultado);



function criarProduto (nome, preco) {
    const produto = {
        nome: nome,
        preco: preco,
        estoque: 1
    }
    return produto
}
const notebook = criarProduto("Intel Core i5 16gb", 2500)
console.log(notebook);



function areaRetangular (base, altura) {
    return base * altura
}
const area = areaRetangular(5, 5)
console.log(area);

function areaQuadrado (lado) {
    return areaRetangular(lado, lado)
}
const areaQ = areaQuadrado(10)
console.log(areaQ);



function maiorDeIdade (idade) {
    if (idade >= 18) {
        return "Maior de idade"
    } else {
        return "Menor de idade"
    }
}
console.log(maiorDeIdade(20));
console.log(maiorDeIdade(16));