function register (ev) {
    const sectionElement = ev.currentTarget.parentNode
    //Pegando o valor dos inputs do HTML
    const username = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value

    //IF para verificar se as senhas são iguais
    if (password === passwordConfirmation) {
        alert("Usuário " + username + " Registrado!")
    } else {
       alert("As senhas não são iguais!") 
    }
}
//Referenciando o button através do id
const registerButton = document.getElementById("register-button")

//Cria um evento para quando o botão "registerButton" for clicado
registerButton.addEventListener("click", register)

//Função para remover o evento
function removeEvent () {
    //Remove o evento do botão "registerButton" usando o removeEventListener
    registerButton.removeEventListener("click", register)
    alert("Evento removido!")
}