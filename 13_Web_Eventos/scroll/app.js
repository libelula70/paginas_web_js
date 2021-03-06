class App {

    constructor () {
        this.btnTop = document.querySelector('#btn-top')
        this.divTop = document.querySelector('#div-top')
        this.header = document.querySelector('header')
        this.parrafo = document.querySelector('header p')
        this.bajoHeader = document.querySelector('#bajo-header')
        document.addEventListener('scroll', 
            this.scollDetect.bind(this) )
        this.btnTop.addEventListener('click', 
            this.subir.bind(this))
    }   
    
    scollDetect (oE) {
        if (oE.target.scrollingElement.scrollTop > 20) {
            //sticky header
            this.header.classList.add('sticky-header')
            this.header.classList.remove('normal-header')
            this.parrafo.classList.add('hide')
            this.bajoHeader.classList.add('bajo-header')
            this.bajoHeader.classList.remove('hide')
            
        } else {
            //normal header
            this.header.classList.add('normal-header')
            this.header.classList.remove('sticky-header')
            this.parrafo.classList.remove('hide')
            this.bajoHeader.classList.remove()
            this.bajoHeader.classList.remove('bajo-header')
            this.bajoHeader.classList.add('hide')
        }
        
        if (oE.target.scrollingElement.scrollTop > 80) {
            this.divTop.classList.remove('hide')
        } else {
            this.divTop.classList.add('hide')
        }
    }

    subir(oE) {
        //document.scrollingElement.scrollTop = 0
        //location.assign
        //location.href = "#"
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }
}

document.addEventListener('DOMContentLoaded', ()=> {new  App()})

