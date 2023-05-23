//Criando variaveis a partir das propriedades do objeto
const person = {
    name: "Luke",
    job: "Farmer",
    parents: ["Anakin", "Padme"]
}

//Forma tradicional
const name = person.name
//Usando a desestruturação
const { job, parents } = person
//Desestruturação para um array
const [father, mother] = parents

//Exibe os resultados
console.log(name);
console.log(job);
console.log(father, mother);

//Desestruturação como parametro de uma função
function createUser({ name, job, parents }) {
    //Gera um número aleatorio para ser usado como id
    const id = Math.floor(Math.random() * 999)
    return {
        id,
        name,
        job,
        parents
    }
}

const luke = createUser(person)
console.log(luke);