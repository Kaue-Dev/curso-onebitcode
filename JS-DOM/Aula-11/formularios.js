//Referenciando o formulario
const form = document.getElementById("orderForm")

form.addEventListener("submit", function (ev) {
    //Impede que a action do form seja executada
    ev.preventDefault()

    //Referenciando 2 inputs e pegando o valor deles
    const name = document.querySelector("#name").value
    const address = document.querySelector("#address").value
    
    //Referenciando a tag select e pegando o valor da opção marcada
    const breadType = document.querySelector("#breadType").value

    //Referenciando input do tipo radio e pegando o valor
    const main = document.querySelector('input[name="main"]').value

    //Referenciando todos os elementos checkbox e pegando apenas o valor dos itens marcados
    let salad = ""
    document.querySelectorAll('input[name="salad"]:checked').forEach(function (item) {
        salad += " - " + item.value
    })

    //Referenciando a textarea e pegando seu valor
    const observations = document.querySelector("#observations").value

    //Exibindo no console os valores de cada um dos inputs
    console.log({
        name,
        address,
        breadType,
        main,
        salad,
        observations
    });

    //Limpa os inputs após o submit
    document.querySelector("#name").value = ""
    document.querySelector("#address").value = ""
    document.querySelector("#breadType").value = ""
    document.querySelector('input[name="main"]').value = ""
    document.querySelectorAll('input[name="salad"]').value = ""
    document.querySelector("#observations").value = ""
})