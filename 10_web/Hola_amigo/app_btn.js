function app () {

    // Defino los nodos del DOM que me interesan
    let domNombre = document.querySelector("#nombre")
    let domBtnSaludar = document.querySelector("#btnSaludar")
    let domBtnBorrar = document.querySelector("#btnBorrar")
    let domOutput = document.querySelector('#output')

    // Defino los manejadores de eventos de algunos nodos
    domBtnSaludar.addEventListener('click', saludar)
    domBtnBorrar.addEventListener('click', borrar)

    
    function saludar() {
        domOutput.innerHTML = ''
        if(!!domNombre.value) {
            domOutput.innerHTML = `Hola, <strong>${domNombre.value}</strong>`
        }
    }

    function borrar () {
        domNombre.value = ''
        saludar()
    }
}
document.addEventListener('DOMContentLoaded', app)