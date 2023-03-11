let primeiroNome = prompt("Digite seu primeiro nome:")
let sobrenome = prompt("Digite seu sobrenome")
//console.log("NOME COMPLETO:", primeiroNome, sobrenome);

let campoDeEstudo = prompt("Qual seu campo de estudo?")
//console.log("CAMPO DE ESTUDO:", campoDeEstudo);

let anoDeNascimento = prompt("Em que ano você nasceu?")
idade = 2022 - anoDeNascimento
//console.log("IDADE:", idade);

alert(
    "Nome completo: " + primeiroNome + " " + sobrenome +
    "\nCampo de estudo: " + campoDeEstudo +
    "\nIdade: " + idade
)