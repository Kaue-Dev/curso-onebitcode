function createLabel (text, htmlFor) {
    const label = document.createElement("label")
    label.htmlFor = htmlFor
    label.innerHTML = text
    return label
}

function createInput (id, value, name, type = "text", placeholder = '') {
    const input = document.createElement("input")
    input.id = id
    input.value = value
    input.name = name
    input.type = type
    input.placeholder = placeholder
    return input 
}

const addButton = document.getElementById("add-button")
const form = document.getElementById("dev-form")
const devs = []
let inputRows = 0

addButton.addEventListener("click", function() {
    const ulInputs = document.getElementById("inputs")

    const newRow = document.createElement("li")
    const rowIndex = inputRows
    inputRows++
    newRow.id = "input-row-" + rowIndex
    newRow.className = "input-row"

    const techNameLabel = createLabel("Nome: ", "techName-" + rowIndex)
    const techNameInput = createInput("techName-" + rowIndex, null, "techName")

    const expLabel = createLabel("Experiencia: ")
    const id1 = "expRadio-" + rowIndex + ".1"
    const expRadio1 = createInput("expRadio-" + rowIndex + ".1", "0-2 Anos", "techExp-" + rowIndex, "radio")
    const expLabel1 = createLabel("0-2 Anos", id1)

    const id2 = "expRadio-" + rowIndex + ".2"
    const expRadio2 = createInput("expRadio-" + rowIndex + ".2", "3-4 Anos", "techExp-" + rowIndex, "radio")
    const expLabel2 = createLabel("3-4 Anos", id2)

    const id3 = "expRadio-" + rowIndex + ".3"
    const expRadio3 = createInput("expRadio-" + rowIndex + ".3", "5+ Anos", "techExp-" + rowIndex, "radio")
    const expLabel3 = createLabel("5+ Anos", id3)

    const removeButton = document.createElement("button")
    removeButton.type = "button"
    removeButton.innerText = "Remover"

    removeButton.addEventListener("click", function () {
        ulInputs.removeChild(newRow)
    })

    newRow.append(
        techNameLabel, techNameInput,
        expLabel, 
        expRadio1, expLabel1,
        expRadio2, expLabel2,
        expRadio3, expLabel3,
        removeButton
    )
    ulInputs.appendChild(newRow)
})

form.addEventListener("submit", function (ev) {
    ev.preventDefault()

    const nameInput = document.getElementById("name-input")
    const inputRows = document.querySelectorAll(".input-row")

    let techs = []
    inputRows.forEach(function (row) {
        const techName = document.querySelector("#" + row.id + " input[name='techName']").value
        const techExp = document.querySelector("#" + row.id + " input[type='radio']:checked")
        techs.push({
            name: techName,
            exp: techExp
        })
    })

    const newDev = {
        fullname: nameInput.value,
        techs : techs
    }

    devs.push(newDev)

    nameInput.value = ""
    inputRows.forEach(function (row) {
        row.remove()
    })
})