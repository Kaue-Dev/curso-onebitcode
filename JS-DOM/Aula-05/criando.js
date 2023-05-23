function addInput() {
    const ul = document.getElementById("inputs")

    //Criando um novo li utilizando o createElement
    const newLi = document.createElement("li")
    //Adicionando um atributo a nova li criada
    newLi.innerText = "Novo Input:"
    newLi.className = "list-item"

    //Criando um novo input utilizando o createElement
    const newInput = document.createElement("input")
    //Adicionando atributos ao novo input criado
    newInput.type = "text"
    newInput.placeholder = "Escreva aqui..."

    //Colocando o input criado dentro da li criada
    newLi.appendChild(newInput)
    //Colocando a li criada dentro da ul já existente
    ul.appendChild(newLi)
}