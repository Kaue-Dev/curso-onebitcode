let pessoa = {
    nome: "Kaue",
    idade: 18,

    //Criando método dentro de objetos
    dizerOla() {
        console.log("Olá, " + this.nome);
    }
}

//Chamando o método
pessoa.dizerOla()