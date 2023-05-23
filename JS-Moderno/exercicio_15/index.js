//Importações
import { charKeysValue } from "./modules/charkeys.js";
import { clearInput } from "./modules/clear.js";
import { calculate } from "./modules/calculate.js";
import { keysEvent } from "./modules/keys.js";
import { themeSwitch } from "./modules/theme.js";
import { copyToClipboard } from "./modules/copy.js";

//Referenciando o input onde o usuario ira digitar e o input onde o resultado ira aparecer
export const input = document.getElementById("input")
export const resultInput = document.getElementById("result")

//Funções
document.querySelectorAll(".charKey").forEach(charKeysValue)
document.getElementById("clear").addEventListener("click", clearInput)
document.getElementById("equal").addEventListener("click", calculate)
input.addEventListener("keydown", keysEvent)
document.getElementById("themeSwitcher").addEventListener("click", themeSwitch)
document.getElementById("copyToClipboard").addEventListener("click", copyToClipboard)