function show() {
    //Obtendo um unico elemento com o getElementById 
    const contactList = document.getElementById("contact-list")
    console.log("Usando getElementById: ", contactList);

    //Obtendo todos os elementos li do HTML com getElementsByTagName
    const listElements = document.getElementsByTagName("li")
    console.log("Usando getElementsByTagName: ", listElements);

    //Obtendo elementos pelo nome da classe usando getElementsByClassName
    const contactInputs = document.getElementsByClassName("contact-input")
    console.log("Usando getElementsByClassName: ", contactInputs);

    //Obtendo elemento pelo name com getElementsByName
    const firstContact = document.getElementsByName("contact1")
    console.log("Usando getElementsByName: ", firstContact); 

    //Obtendo elementos com querySelectorAll
    const contacts = document.querySelectorAll("#contact-list > li > .contact-input")
    console.log("Usando querySelectorAll: ", contacts);

    //Obtendo elemento especifico com querySelector
    const secondContact = document.querySelector("#contact-list > li > #contact2")
    console.log("Usando querySelector: ", secondContact);
}