function dobro (x) {
    alert("O dobro de " + x + " é " + (x * 2))
}
dobro(5)



function dizerOla (name = "Mundo") {
    alert("Olá, " + name)
}
dizerOla()



function soma(a, b) {
    alert("O resultado da soma é " + (a + b))
}
soma(5, 5)



function criarUsuario (nome, senha, email, tipo) {
    const usuario = {
        nome: nome,
        email: email,
        senha: senha,
        tipo: tipo
    }
    console.log(usuario);
}
criarUsuario("Kaue", "1234", "kaue@email.com", "admin")



function muitosParametros (nome, telefone, endereco, aniversario, email, senha) {
    // ...
}
muitosParametros("nome", "telefone", "endereco", "aniversario", "email", "senha")

function objetoComoParametro (usuario) {
    usuario.nome
    usuario.email
}
const dadosDoUsuario = {
    nome: "",
    telefone: "",
    email: "",
    senha: "",
    endereco: "",
    aniversario: ""
}

objetoComoParametro(dadosDoUsuario)