const arrayTradicional = ["1° Nivel", "2° Nivel", "3° Nivel"]
//console.log(arrayTradicional);

const arrayBidimensional = [
    ["1° Nivel", "2° Nivel", "3° Nivel"],
    ["4° Nivel", "5° Nivel", "6° Nivel"],
    ["7° Nivel", "8° Nivel", "9° Nivel"]
]
//console.log(arrayBidimensional);

const teste = [
    "1º Nível",
    ["2º nível", 42, true],
    [
      ["3º nível, 1º item", "Olá, mundo!"],
      ["3º nível, 2º item", "Oi, mundo!"],
    ],
    []
]

console.log(teste);
console.log(teste[0]);
console.log(teste[1][0]);
console.log(teste[2][0][0]);
console.log(teste[2][1][0]);
console.log(teste[3]);

const matriz = [
    ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
    ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
    ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
]
console.table(matriz)

matriz.push(["Nova linha"])
matriz[0].push("Nova coluna")
console.table(matriz)

for (let i = 0; i < matriz.length; i++) {
    console.log("Primeiro FOR", matriz[i]);

    for (let j = 0; j < matriz[i].length; j++) {
        const elemento = matriz[i][j]
        console.log("Posição: (" + i + ", " + j + ") Valor: " + elemento);
    }

}