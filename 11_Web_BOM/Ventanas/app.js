class App {
    constructor() {
        this.oVentana = null
        this.btnAbrir = document.querySelector('#btnAbrir')
        this.btnCerrar = document.querySelector('#btnCerrar')

        this.btnAbrir.addEventListener('click', this.abrirVentana.bind(this))
        this.btnCerrar.addEventListener('click', this.cerrarVentana.bind(this))

    }

    abrirVentana2 () {
        // Abre una ventana con una URL absoluto
        this.oVentana = window.open('https://skillcrush.com/2017/04/03/free-coding-games/')
        // Abre una ventana con una URL relativa
        //this.oVentana = window.open ('./ventana.html')

    //this.oVentana = window.open('', '') 
        /* `top=400, 
         left=400, 
         width=300, 
         height=300` */


         /* toolbar=yes, 
         scrollbars=no, 
         resizable=no,  */
    //this.oVentana.document.write('<h1>Nueva ventana</h1>')
}

    abrirVentana () {

        //this.oVentana = window.open()
        // centrada y de 300px
        let x = window.screen.availWidth/2 - 150
        let y = window.screen.availHeight/2 - 150

        if (!this.oVentana) {
        this.oVentana = window.open('', '', 
            `toolbar=yes, 
             scrollbars=no, 
             resizable=no, 
             top=${y}, 
             left=${x}, 
             width=300, 
             height=300`)
        }

        this.oVentana.document.write ('<h1>Nueva Ventana</h1>')
        this.btnAbrir.disabled= true
        this.btnCerrar.disabled= false
    }

    cerrarVentana() {
        this.oVentana.close()
        this.oVentana = null
        this.btnAbrir.disabled= false
        this.btnCerrar.disabled= true
    }
}




document.addEventListener ('DOMContentLoaded', () => {new App ()})