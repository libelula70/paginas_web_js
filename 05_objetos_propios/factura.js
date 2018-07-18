/* let factura = {
    empresa: {
        nombre: '',
        direccion: '',
        telefono: '',
        nif: ''
    },
    cliente: {
        nombre: '',
        direccion: '',
        telefono: '',
        nif: ''
    },
    elementos: [
        {descripcion,
        precio,
        cantidad},
        {descripcion,
        precio,
        cantidad},
        {descripcion,
        precio,
        cantidad},
    ],
    importeTotal: '',
    tipoIva: '',
    formaPago: ''
}

factura.calculaImporteTotal=function() {
    //actualizar el valor de la propiedad correspondiente
}

factura.mostrar=function() {
    //mostrar por pantalla importe total factura en html
} */

/*let factura1 = {
    empresa: {
        nombre: 'Boracay Ediciones',
        direccion: 'Cl. Pez',
        telefono: '915 55 56 89',
        nif: '48956217-A'
    },
    cliente: {
        nombre: 'Librería Tautalug',
        direccion: 'Cl. Tortuga',
        telefono: '915 58 45 12',
        nif: '12854751-B'
    },
    elementos: [
        {descripcion: 'La Isla del Tesoro',
        precio: 30,
        cantidad: '10'},
        {descripcion: 'Drácula',
        precio: 75,
        cantidad: '5'},
        {descripcion: 'El Señor de los Anillos',
        precio: 50,
        cantidad: '24'},
    ],
    importeTotal: 0,
    tipoIva: 1.04,
    formaPago: 'Transferencia'
}

factura1.calculaImporteTotal = function() {
    this.importeTotal = 0
    this.elementos.forEach(
        (item) => {
            this.importeTotal +=
            item.precio*item.cantidad*this.tipoIva}
    ) 

    //actualizar el valor de la propiedad correspondiente
}

factura1.mostrar=function() {
    this.calculaImporteTotal()
    this.pintarDatos ()
    //mostrar por pantalla importe total factura en html
}

factura1.pintarDatos = function (oDatos = this) {
    for (const key in oDatos) {
        if (oDatos.hasOwnProperty(key) && (typeof oDatos[key] !== 'function')) {
            if (typeof oDatos[key] === 'object') { 
                if (isNaN(key)) {
                console.log(`Propiedades de ${key}: `)
                }
                this.pintarDatos(oDatos[key])
            } else {
                console.log(`${key} : ${oDatos[key]}`)
            }    
        }    
    }
}

factura1.mostrar()*/


function Empresa (nombre, direccion, telefono, nif) {
    this.nombre = nombre
    this.direccion = direccion
    this.telefono = telefono
    this.nif = nif
}

function Elementos (descripcion, precio, cantidad) {
    this.descripcion = descripcion
    this.precio = precio
    this.cantidad = cantidad
}
function Factura (Empresa, Cliente, Elementos, importeTotal, tipoIva, formaPago) {
    this.Empresa = Empresa
    this.Empresa = Cliente
    this.Elementos = Elementos
    this.importeTotal = importeTotal
    this.tipoIva = tipoIva
    this.formaPago = formaPago
}

let Empresa = new Empresa()
let Cliente = new Cliente()
let Elementos = new Elementos()
let Factura = new Factura(Empresa, Cliente, Elementos)
let persona2 = new Persona('Pepe', 22, 'Informático')
console.log(persona2)
persona2.saludar()
//console.log(persona2.constructor)

let persona3 = new Persona('Luis', 33, 'Bombero')
console.log(persona3)
persona3.saludar()