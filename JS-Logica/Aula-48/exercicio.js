let opcao = ""
let resultado = ""

function areaTriangulo(base, altura) {
    base = prompt("Digite o valor da base:")
    altura = prompt("Digite o valor da altura:")
    resultado = (base * altura) / 2
}
function areaRetangulo(base, altura) {
    base = prompt("Digite o valor da base:")
    altura = prompt("Digite o valor da altura:")
    resultado = base * altura
}
function areaQuadrado(lado) {
    lado = prompt("Digite o valor do lado:")
    resultado = lado**2
}
function areaTrapezio(baseMaior, baseMenor, altura) {
    baseMaior = parseFloat(prompt("Digite o valor da base maior:"))
    baseMenor = parseFloat(prompt("Digite o valor da base menor:"))
    altura = parseFloat(prompt("Digite o valor da altura:"))
    resultado = parseFloat((baseMaior + baseMenor) * altura / 2)
}
function areaCirculo(raio) {
    raio = prompt("Digite o valor do raio:")
    resultado = 3.14 * (raio**2)
}

do {
    opcao = prompt(
        "Escolha uma das opções a baixo: \n" +
        "\n1. Calcular área do Triangulo" +
        "\n2. Calcular área do Retangulo" +
        "\n3. Calcular área do Quadrado" +
        "\n4. Calcular área do Trapézio" +
        "\n5. Calcular área do Círculo" +
        "\n6. Sair"
    )

    switch (opcao) {
        case "1":
            areaTriangulo()
            alert("A área do triangulo é: " + resultado + " M²")
            break
        case "2":
            areaRetangulo()
            alert("A área do retangulo é: " + resultado + " M²")
            break
        case "3":
            areaQuadrado()
            alert("A área do quadrado é: " + resultado + " M²")
            break
        case "4":
            areaTrapezio()
            alert("A área do trapézio é: " + resultado + " M²")
            break
        case "5":
            areaCirculo()
            alert("A área do circulo é: " + resultado + " M²")
            break
        case "6":
            alert("Sistema Encerrado...")
            break
        default:
            alert("Escolha uma opção válida")
    }
} while (opcao !== "6");