//Primeiro personagem
const primaryCharacterName = prompt("Qual o nome do 1° personagem?")
const primaryCharacterPower = parseInt(prompt("Qual o poder de ataque do " + primaryCharacterName + " ?"))

//Segundo personagem
const secondaryCharacterName = prompt("Qual o nome do 2° personagem?")
const secondaryCharacterLife = parseInt(prompt("Quantos pontos de vida tem o " + secondaryCharacterName + " ?"))
const secondaryCharacterDefense = parseInt(prompt("Quantos pontos de defesa tem o " + secondaryCharacterName + " ?"))
const secondaryCharacterShield = prompt(secondaryCharacterName + " Possui um escudo? (Sim/Não)")

//Dano total inicial
let totalDamage = 0

//Cálculo de dano
if (primaryCharacterPower > secondaryCharacterDefense && secondaryCharacterShield == "Não") {
    totalDamage = primaryCharacterPower - secondaryCharacterDefense
} else if (primaryCharacterPower > secondaryCharacterDefense && secondaryCharacterShield == "Sim") {
    totalDamage = (primaryCharacterPower - secondaryCharacterDefense)/2
} else if (primaryCharacterPower <= secondaryCharacterDefense) {
    totalDamage = 0
}

//Informações finais
const finalSecondaryLife = secondaryCharacterLife - totalDamage 
alert(
    "Poder de ataque: " + primaryCharacterPower +
    "\nDano total causado: " + totalDamage + 
    "\n\n" +
    "Pontos de defesa: " + secondaryCharacterDefense +
    "\nPossui escudo? " + secondaryCharacterShield +
    "\nVida inicial do defensor: " + secondaryCharacterLife +
    "\nVida final do defensor: " + finalSecondaryLife    
)
