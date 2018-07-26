class App {
    constructor() {
        this.count = 0
        this.aLinks = document.querySelectorAll('a')
        
        this.aLinks.forEach( (node) => {
            node.addEventListener('click', this.cambiaLista.bind(this))
        })
    }
    cambiaLista (ev) {
        let nodeItem = ev.target
        //Si el item ya está cambiado, no hago nada
        if(nodeItem.textContent.indexOf('Ops') >= 0) {
            return
        }
        //Cambio el item clickeado
        nodeItem.textContent = "Ops, no tengo " + nodeItem.textContent
        this.count++
        //Si ya han cambiado todos los items...
        if (this.count === this.aLinks.length) {
            nodeItem.parentNode.parentNode.outerHTML =
            `<div>
            <p>¡Uy!, parece que estoy ilocalizable </p>
            </div>`
        }
    }
}




document.addEventListener('DOMContentLoaded', () => {new App ()})