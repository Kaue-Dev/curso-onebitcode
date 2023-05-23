const listaPacientes = []
let menuInterativo = ""

do {
    let pacientes = ""
    for(let i = 0; i < listaPacientes.length; i++) {
        pacientes = pacientes + (i + 1) + "° - " + listaPacientes[i] + "\n"
    }

    menuInterativo = prompt(
        "Pacientes: \n" + pacientes +
        "\n Escolha uma das opções a baixo:" +
        "\n 1. Novo paciente" +
        "\n 2. Consultar paciente" +
        "\n 3. Sair"
    )

    switch (menuInterativo) {
        case "1":
            const novoPaciente = prompt("Digite o nome do novo paciente:")
            listaPacientes.push(novoPaciente)
            break
    
        case "2":
            const pacienteConsultado = listaPacientes.shift()
            alert(pacienteConsultado + " foi removido da fila!")
            break
        
        case "3":
            alert("Sistema Encerrado")
            break
             
        default:
            alert("Escolha uma opção válida")
    } 
    
} while (menuInterativo !== "3");





