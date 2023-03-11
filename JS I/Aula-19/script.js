const primaryCarName = prompt("Digite o nome do 1° Carro:")
const secondaryCarName = prompt("Digite o nome do 2° Carro:")

const primaryCarVelocity = prompt("Qual a velocidade do " + primaryCarName)
const secondaryCarVelocity = prompt("Qual a velocidade do " + secondaryCarName)

if (primaryCarVelocity > secondaryCarVelocity) {
    alert(primaryCarName + " é o mais rápido")
} else if (secondaryCarVelocity > primaryCarVelocity) {
    alert(secondaryCarName + " é o mais rápido")
} else {
    alert(primaryCarName + " e " + secondaryCarName + " possuem a mesma velocidade!")
}