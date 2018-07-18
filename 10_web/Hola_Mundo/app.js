function saludar() {
    console.log('Hola Mundo')
}
function adios() {
    console.log('Adios Mundo')
}

function main () {
    document.querySelector('#btn-saludar')
    .addEventListener('click',saludar)
    
    document.querySelector('#btn-adios')
    .addEventListener('click', adios)
}

/* (function () {
window.addEventListener('load', main)
})() */

document.addEventListener('DOMContentLoaded', main)


/* window.addEventListener('load', function () {
    document.querySelector('#btn-saludar')
    .addEventListener('click',saludar)
}) */

