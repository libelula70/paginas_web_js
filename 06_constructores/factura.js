function Empresa (nombre, direccion, telefono, nif) {
    this.nombre = nombre
    this.direccion = direccion
    this.telefono = telefono
    this.nif = nif
}
function Elemento (descripcion, precio, cantidad) {
    this.descripcion = descripcion
    this.precio = precio
    this.cantidad = cantidad
}
function Factura (Empresa, Cliente, Elemento, importeTotal, tipoIva, formaPago) {
    this.Empresa = Empresa
    this.Empresa = Cliente
    this.Elemento = Elemento
    this.importeTotal = importeTotal
    this.tipoIva = tipoIva
    this.formaPago = formaPago
    this.calculaImporteTotal = function() {
    }
    this.mostrar = function () {
        console.log(this)
    }
}

let factura1 = new Empresa ('Boracay Ediciones', 'Cl. Pez', '915 552 632', '4589785-A')
factura1.mostrar()

/* let Empresa = new Empresa()
let Cliente = new Cliente()
let Elementos = new Elementos()
let Factura = new Factura(Empresa, Cliente, Elementos) */


/* let persona2 = new Persona('Pepe', 22, 'Informático')
console.log(persona2)
persona2.saludar()
//console.log(persona2.constructor)

let persona3 = new Persona('Luis', 33, 'Bombero')
console.log(persona3)
persona3.saludar() */