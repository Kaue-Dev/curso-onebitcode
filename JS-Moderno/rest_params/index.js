function sum(...numbers) {
    //Soma todos os número de dentro de um array
    return numbers.reduce((accum, num) => accum + num, 0)
}
//Posso passar quantos parametros quiser
console.log(sum(5, 5));
console.log(sum(5, 5, 5, 10, 10, 15));