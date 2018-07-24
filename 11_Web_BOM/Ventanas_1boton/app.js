class App {
    constructor() {
        this.oVentana = null
        this.interruptor = document.querySelector('#interruptor')
       
        this.interruptor.addEventListener('click', this.abrirVentana.bind(this))
        
        this.img = null
        this.prepararImg()

    }

    prepararImg() {
        this.img = new Image()
        this.img.src = './asset/libelula.png'
        this.img.addEventListener('load', 
        () => {
            console.log(this.img.width)
            console.log(this.img.height)
        })
    
    }

    abrirVentana () {

       /*  let x = window.screen.availWidth/2 - 150
        let y = window.screen.availHeight/2 - 150 */

        if (!this.oVentana) {
        this.oVentana = window.open('', '', 
            `toolbar=yes, 
             scrollbars=no, 
             resizable=no, 
             top=100, 
             left=100, 
             width=${this.img.width + 20}, 
             height=${this.img.height + 20}`)

        this.oVentana.document.write(`<img src=${this.img.src} alt="Libelula sonriendo">`)
        this.interruptor.innerHTML = 'Cerrar Ventana'
        } else {
            this.oVentana.close()
            this.oVentana = null
            this.interruptor.innerHTML = 'Abrir Ventana'
        }    
    }
}


document.addEventListener ('DOMContentLoaded', () => {new App ()})