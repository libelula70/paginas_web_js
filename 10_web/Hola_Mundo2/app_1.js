function app () {
    let amigo = 'Pepe'
    document.querySelector('#btn-saludar')
    .addEventListener('click',saludar)
    
    document.querySelector('#btn-adios')
    .addEventListener('click', adios)
    
        function saludar() {
        console.log(`Hola ${amigo}`)
    }
    function adios() {
        console.log(`Adios ${amigo}`)
    }
}


document.addEventListener('DOMContentLoaded', app)


