class App {
    constructor () {
        this.aBtnMas = document.querySelectorAll('.mas')
        this.textoMas = document.querySelectorAll('.ocultar')
    
        this.aBtnMas.forEach(
            (btn) => {btn.addEventListener ('click', this.mostrar.bind(this))}
        )
    }
    mostrar (oE) {
        let nodoBtn = oE.target
        let nodoTxt = nodoBtn.previousElementSibling
        nodoTxt.classList.toggle('ocultar')

        if (nodoTxt.classList.contains ('ocultar')) {
        nodoBtn.textContent = 'Ver mas'
        } else {nodoBtn.textContent = 'Ver menos'}
    }

}

document.addEventListener('DOMContentLoaded', () => {new App()})