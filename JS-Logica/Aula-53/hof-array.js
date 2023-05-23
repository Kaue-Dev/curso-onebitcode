const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

// Map | Cria um novo array
const nomes = personagens.map(function (personagem) {
    return personagem.nome
})
console.log("Nomes dos personagens usando .map() \n", nomes);

// Filter | Filtra elementos de um array e cria um novo array
const orcs = personagens.filter(function (personagem) {
    return personagem.raca === "Orc"
})
console.log("Filtrando personagens da raça Orc com .filter() \n", orcs);

// Reduce | Tranforma um array em outro elemento ou valor
const nivelTotal = personagens.reduce(function (valorAcumulado, personagem) {
    return valorAcumulado + personagem.nivel
}, 0)
console.log("Somando o nivel total dos personagens usando o .reduce() \n", nivelTotal);

// Sort | Ordena os elementos de um array
const personagensOrdenados = personagens.slice().sort(function (a, b) {
    return a.nivel - b.nivel
})
console.log("Ordenando o array pelo nível dos personagens usando o .sort() \n", personagensOrdenados);