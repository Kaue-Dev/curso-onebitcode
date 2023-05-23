function addContact () {
    //Referenciando a section no HTML
    const contactsList = document.getElementById("contacts-list")

    //Criando elemento título h3 
    const h3 = document.createElement("h3")
    h3.innerText = "Contato"
    //Criando ul onde tudo será armazenado
    const ul = document.createElement("ul")

    //Criando li que ficará dentro da ul
    const nameLi = document.createElement("li")
    nameLi.innerText = "Nome:"
    //Criando input para nome do contato
    const nameInput = document.createElement("input")
    nameInput.type = "text"
    //Organizando elementos filhos
    nameLi.appendChild(nameInput)
    ul.appendChild(nameLi)

    //Criando li que ficará dentro da ul
    const phoneLi = document.createElement("li")
    phoneLi.innerText = "Telefone:"
    //Criando input para telefone do contato
    const phoneInput = document.createElement("input")
    phoneInput.type = "phone"
    //Organizando elementos filhos
    phoneLi.appendChild(phoneInput)
    ul.appendChild(phoneLi)

    //Criando li que ficará dentro da ul
    const adressLi = document.createElement("li")
    adressLi.innerText = "Endereço:"
    //Criando input para o endereço
    const adressInput = document.createElement("input")
    adressInput.type = "text"
    //Organizando elementos filhos
    adressLi.appendChild(adressInput)
    ul.appendChild(adressLi)

    //Adicionando vários elemento de uma vez na section
    contactsList.append(h3, ul)
}

function removeContact () {
    //Referenciando a section no HTML
    const contactsList = document.getElementById("contacts-list")

    //Referenciando os elementos que serão apagados
    const h3Titles = document.getElementsByTagName("h3")
    const ulContacts = document.getElementsByTagName("ul")

    //Removendo os elemento da ultima posição
    contactsList.removeChild(h3Titles[h3Titles.length - 1])
    contactsList.removeChild(ulContacts[ulContacts.length - 1])
}