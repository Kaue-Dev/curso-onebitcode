function register (element) {
    //Exibindo o elemento referenciado no console
    console.log(element);

    //Pegando os valores dos inputs
    const username = element.children.username.value
    const password = element.children.password.value
    const passwordConfirmation = element.children.passwordConfirmation.value

    //Exibindo os valores no console em forma de objeto
    console.log({ username, password, passwordConfirmation });

    //IF para garantir que as senhas sejam iguais
    if (password === passwordConfirmation) {
        alert("Usuario " + username + " Registrado!")
    } else {
        alert("As senhas são diferentes!")
    }
}