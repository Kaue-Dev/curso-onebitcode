function dividir(num) {
    console.log(num);

    if (num % 2 === 0) {
        dividir(num / 2)
    } else {
        return num
    }
}

//dividir(16)


//função recursiva para calcular o fatorial
function fatorial(num) {
    console.log("Número: " + num);

    if (num === 0) {
        return 1
    } else if (num ===1) {
        return 1
    } else {
        console.log(num + " * !" + (num - 1));
        return num * fatorial(num - 1)
    }
}
console.log(fatorial(5));