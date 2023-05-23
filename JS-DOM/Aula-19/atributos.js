const input = document.getElementById("input")

const valueButton = document.getElementById("value")
const typeButton = document.getElementById("type")
const placeholderButton = document.getElementById("placeholder")
const disableButton = document.getElementById("disable")
const dataButton = document.getElementById("data")

//Alterando valor do input
valueButton.addEventListener("click", function() {
    input.value = input.value === "" ? "..." : ""

    //input.getAttribute("value")
})

//Alterando o type do input
typeButton.addEventListener("click", function() {
    input.type = input.type !== "radio" ? "radio" : "text"

    //input.setAttribute("type", "radio")
})

//Alterando o placeholder do input
placeholderButton.addEventListener("click", function() {
    input.placeholder = input.placeholder === "" ? "Escreva..." : ""
})

//Desabilitando o input
disableButton.addEventListener("click", function() {
    input.setAttribute("disabled", !input.disabled)
})

//Alterando o atributo data do input
dataButton.addEventListener("click", function() {
    console.log(input.dataset.something);
})