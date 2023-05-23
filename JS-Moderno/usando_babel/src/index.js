const mediaSimples = (...nums) => {
    const sum = nums.reduce((accum, num) => accum + num, 0)
    const totalN = nums.length
    const result = sum / totalN
    return result
}
console.log(`Média Artimética Simples: ${mediaSimples(5, 5, 10, 10)}`)

/* ------------ */
const mediaPonderada = (...entries) => {
    const sum = entries.reduce((accum, { num, weight }) => accum + (num * (weight ?? 1)), 0)
    const weightSum = entries.reduce((accum, entry) => accum + (entry.weight ?? 1), 0)
    return sum / weightSum
}
console.log(`Média Aritmética Ponderada: ${mediaPonderada(
    { num: 10, weight: 3},
    { num: 7, weight: 2},
    { num: 30, weight: 5},
)}`)

/* ------------ */
const mediana = (...nums) => {
    const orderedNums = [...nums].sort((a, b) => a - b)
    const middleNums = Math.floor(orderedNums.length / 2)

    const firstMedian = orderedNums[middleNums - 1]
    const secondMedian = orderedNums[middleNums]

    if (orderedNums.length % 2 === 0 ) {
        return mediaSimples(firstMedian, secondMedian)
    }
    if (orderedNums.length % 2 === 1) {
        return orderedNums[middleNums]
    }
}
console.log(`Mediana: ${mediana(2, 5, 99, 4, 42, 7)}`)

/* ------------ */
const moda = (...nums) => {
    const quantities = nums.map((num) => {
        return [
            num,
            nums.filter(n => num === n).length
        ]
    })
    quantities.sort((a, b) => b[1] - a[1])
    return quantities[0][0]
}
console.log(`Moda: ${moda(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`);