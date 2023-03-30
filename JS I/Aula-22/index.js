const valorMetros = prompt("Informe um valor em Metros:")
const escolhaDeMedida = prompt(
    "Para qual unidade de medida deseja converter?" + 
    "\n1 - mm" + 
    "\n2 - cm" + 
    "\n3 - dm" +
    "\n4 - dam" +
    "\n5 - hm" +
    "\n6 - km"
)

switch (valorMetros, escolhaDeMedida) {
    case "1" :
        alert("Valor em milímetros: " + valorMetros * 1000 + " MM")
        break
    case "2" :
        alert("Valor em centímetros: " + valorMetros * 100 + " CM")
        break
    case "3" :
        alert("Valor em decímetros: " + valorMetros * 10 + " DM")
        break
    case "4" :
        alert("Valor em decâmetros: " + valorMetros / 10 + " DAM")
        break
    case "5" :
        alert("Valor em hectômetros: " + valorMetros / 100 + " HM")
        break
    case "6" :
        alert("Valor em quilômetros: " + valorMetros / 1000 + " KM")
        break
    default :
        alert("Opção inválida")
}