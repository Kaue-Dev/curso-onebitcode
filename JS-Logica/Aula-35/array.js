const array = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(array);

//Adicionar elementos no Array
//Usando o "push"
array.push("TestePush") //Joga o valor para o final do Array

//Usando o "unshift"
array.unshift("TesteUnshift") //Joga o valor para o inicio do Array

//Remover elementos no Array
//Usando o "pop"
const ultimoElemento = array.pop() //Remove o item que está na ultima posição
console.log(ultimoElemento);

//Usando o "shift"
const primeiroElemento = array.shift() //Remove o item que está na primeira posição
console.log(primeiroElemento);

//Pesquisar por um elemento
//Usando o "includes"
const inclui = array.includes("Sam") //Verifica se o item está no array e retorna True ou False
console.log(inclui);

//Usando o "indexOf"
const indice = array.indexOf("Sam") //Retorna a posição de um determinado elemento
console.log(indice);

//Cortar e Concatenar Arrays
//Usando o "slice"
const usandoSlice = array.slice(0, 4) //Separa os um determinado número de elementos
const sliceReverso = array.slice(-4)
console.log("Slice", usandoSlice);
console.log("Slice Reverso", sliceReverso);

//Usando o "concat"
const usandoConcat = usandoSlice.concat(sliceReverso) //Concatena Arrays ou pedaços de Array
console.log("Concat", usandoConcat);

//Substituição de Elementos
//Usando o "splice"
const usandoSplice = array.splice(indice, 1, "Sam (Testando Splice)") //Remove elemento de um determinado indice e substitui por outros
console.log("Splice", usandoSplice);

//Iterar sobre os Elementos
//Usando o "for"
for (let i = 0; i < array.length; i++) {
    const elemento = array[i]
    console.log(elemento + " - Posição: " + i);
} //Percorre toda a lista e mostra no console qual elemento está mostrando, e sua posição
