//Function Normal
function normalSum(a, b) {
    return a + b
}

//Function Normal Anônima
const anonymousSum = function(a ,b) {
    return a + b
}

//Arrow Function
const arrowSum = (a, b) => {
    return a + b
}

//Arrow Function em 1 Linha
const arrowSubtract = (a, b) => a - b
//Arrow Function com 1 parametro
const double = num => num * 2

//Exibindo resultados
console.log(`Soma normal: ${normalSum(2, 2)}`);
console.log(`Soma anônima: ${anonymousSum(2, 2)}`);
console.log(`Soma arrow function: ${arrowSum(2, 2)}`);
console.log(`Subtração arrow function: ${arrowSubtract(4, 2)}`);
console.log(`Dobro com arrow function: ${double(10)}`);

//Array
const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']
//Filtra as cidades que começam com P
const startingWithP = towns.filter(town => town[0] === "P")
console.log(startingWithP);