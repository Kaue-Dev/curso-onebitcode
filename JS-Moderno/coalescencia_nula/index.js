const valorA = 0
const valorB = null
const valorC = "Testando"

console.log(valorA || valorB || valorC);
//Serve para ignorar valores que sejam undefined ou null e retorna outro valor
console.log(valorA ?? valorB ?? valorC);

let A = 0
let B = A || 42
console.log({A, B});
B = A ?? 42
console.log({A, B});