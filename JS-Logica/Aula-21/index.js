const resultado = prompt("Escolha uma alternativa: \nA) \nB) \nC)")

switch (resultado) {
    case "a" :
        alert("Caso A")
    case "b" :
        alert("Caso B")
        break
    case "c" :
        alert("Caso C")
    default :
        alert("Default")
}