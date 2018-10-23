class App {

    constructor () {

        this.btnSubir = document.querySelector('#btn-subir').addEventListener('click', this.subir.bind(this))
        this.divSubir = document.querySelector('#div-subir')
        this.btnMasTexto = document.querySelectorAll('a.mas-texto')
        this.textoMas = document.querySelectorAll('.mas-texto')
        this.btnBurguer = document.querySelector ('#btnBurguer')
        this.menuBurguer = document.querySelector ('div.burguer-content')
        this.aNodosMenu = document.querySelectorAll('.movil')

        document.addEventListener('scroll', this.scrollDetect.bind(this))

        this.btnMasTexto.forEach(
            (btn) => {btn.addEventListener ('click', this.mostrar.bind(this))}
        )
        this.aNodosMenu.forEach(
            (item) => {item.addEventListener('click', this.ocultarMenu.bind(this))}
        )

        this.btnBurguer.addEventListener ('click', this.mostrarMenu.bind(this))

    }
//Detectar scroll y boton para subir al principio   
    scrollDetect (oE) {
        if (oE.target.scrollingElement.scrollTop > 200) {
            this.divSubir.classList.remove ('hide')
        } else {
            this.divSubir.classList.add ('hide')
        }
    }  
    subir(oE) {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }
//Hasta aquí detectar scroll y botón para subir

//Botón más texto
   mostrar (oE) {
        let nodoBtn = oE.target
        let nodoTxt = nodoBtn.previousElementSibling
        nodoTxt.classList.toggle('mas-texto')
        if (nodoTxt.classList.contains ('mas-texto')) {
            nodoBtn.textContent = 'Ver más'
        } else {nodoBtn.textContent = 'Ver menos'}  
    }
//Hasta aquí más texto

//Mostrar menú burguer
     mostrarMenu() {
        this.menuBurguer.classList.toggle('hide')
    }
    ocultarMenu(item) {
        this.menuBurguer.classList.add ('hide')
    }
}
document.addEventListener('DOMContentLoaded', () => new App())

