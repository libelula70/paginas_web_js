function app () {

    //Defino los nodos del DOM que me interesan
    let domNombre = document.querySelector("#nombre")
    let domBtnSaludar = document.querySelector("#btnSaludar")
    let domBtnBorrar = document.querySelector("#btnBorrar")
    let domOutput = document.querySelector("#output")
    
    //Defino los manejadores de eventos de algunos nodos
    domBtnSaludar.addEventListener('click', saludar)
    domBtnBorrar.addEventListener('click', borrar)
    
    domNombre.addEventListener('input', leerDatos)
    // domNombre.addEventListener('change', detectarChange)
    
    function leerDatos() {
        let valorNombre = domNombre.value
        console.log('valorNombre: ', valorNombre)
        console.log('Input detectado')
        domOutput.innerHTML = `Hola, <strong>${valorNombre}</strong>`
    }



   /*  function detectarChange() {
        let finalNombre = domNombre.value
        console.log('finalNombre: ', finalNombre)
        console.log('Change detectado')
    } */

    function saludar() {
        console.log('Hola Amigo')
    }

    function borrar () {
        console.log('Aún no sé borrar')
    }
}

document.addEventListener('DOMContentLoaded', app)

