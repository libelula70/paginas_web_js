class App {

    constructor () {
        this.btnSubir = document.querySelector('#btn-subir')
        this.divSubir = document.querySelector('#div-subir')
    
        document.addEventListener('scroll', this.scollDetect.bind(this) )
        this.btnSubir.addEventListener('click', this.subir.bind(this))
    }   
    
    scollDetect (oE) {
        if (oE.target.scrollingElement.scrollTop > 200) {
            this.divSubir.classList.toggle ('hide')
        } 
    }  

    subir(oE) {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }
}

document.addEventListener('DOMContentLoaded', () => new App())