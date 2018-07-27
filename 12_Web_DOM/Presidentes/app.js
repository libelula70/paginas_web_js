aPresidentes = ['Adolfo', 'Leopoldo', 'Felipe', 'José María', 'José Luis', 'Mariano', 'Pedro']

class App {
    constructor () {
        this.dato = document.querySelector ('#dato')
        this.btn = document.querySelector('#btn')

        this.dato.addEventListener('input', this.escribir.bind(this))
        this.btn.addEventListener('click', this.mostrar.bind(this))

    }
    escribir () {
        let nom = this.dato.value
        console.log(nom)
    }
    
    

    mostrar () {
        console.log(mostrar)
        
        


        
        //aPresidentes.forEach(dato => {
            
            
    }

}


document.addEventListener('DOMContentLoaded', () => {new App()})