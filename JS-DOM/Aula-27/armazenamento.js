//Session Storage
//Referencia o botão e adiciona um evento de click
document.getElementById("sessionBtn").addEventListener("click", function() {
    //Referencia o input
    const sessionInput = document.getElementById("session")
    //Salva no session storage o valor do input
    sessionStorage.setItem("infos", sessionInput.value)
    //Limpa o valor do input
    sessionInput.value = ""
})

document.getElementById("readSession").addEventListener("click", function() {
    //Variavel que captura as informações salvas na chave "infos"
    const sessionInfo = sessionStorage.getItem("infos")
    //Mostra na tela as informações que foram salvas
    alert("Informação salva: " + sessionInfo)
})

//Local Storage
document.getElementById("localBtn").addEventListener("click", function() {
    const localStorageInput = document.getElementById("local")
    localStorage.setItem("infos", localStorageInput.value)
    localStorageInput.value = ""
})

document.getElementById("readLocal").addEventListener("click", function() {
    const localStorageInfo = localStorage.getItem("infos")
    alert("Informação salva: " + localStorageInfo)
})

//Cookies
document.getElementById("cookieBtn").addEventListener("click", function() {
    const cookiesInput = document.getElementById("cookie")
    //Cria um nome para o cookie
    const cookieString = "infos=" + cookiesInput.value + ";"
    //Cria uma data de expiração para o cookie
    const cookieExpires = "expires=" + new Date(2023, 04, 20) + ";"
    //Cria um caminho para o cookie
    const cookiePath = "path=/;"

    //Cria o cookie concatenando as informações criadas
    document.cookie = cookieString + cookieExpires + cookiePath
    cookiesInput.value = ""
})

document.getElementById("cookie2Btn").addEventListener("click", function() {
    const cookiesInput2 = document.getElementById("cookie2")

    const cookieString = "infos2=" + cookiesInput2.value + ";"
    const cookieExpires = "expires=" + new Date(2023, 04, 20) + ";"
    const cookiePath = "path=/;"

    document.cookie = cookieString + cookieExpires + cookiePath
    cookiesInput2.value = ""
})