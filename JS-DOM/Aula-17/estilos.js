const lightButton = document.getElementById("lightBtn")
const darkButton = document.getElementById("darkBtn")
const switchButton = document.getElementById("switchBtn")

//Alterar o tema para Light
function lightTheme() {
    document.body.style.color = "#212529"
    document.body.style.backgroundColor = "#f1f5f9"
}

//Alterar o tema para Dark
function darkTheme() {
    document.body.style.color = "#f1f5f9"
    document.body.style.backgroundColor = "#212529"
}

//Alternar entre os temas Dark/Light
function switchTheme() {
    //.toggle para alternar as classes CSS
    document.body.classList.toggle("is-light")
    document.body.classList.toggle("is-dark")
}

lightButton.addEventListener("click", lightTheme)
darkButton.addEventListener("click", darkTheme)
switchButton.addEventListener("click", switchTheme)