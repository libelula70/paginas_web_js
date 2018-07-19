import { Empresa } from "./Empresa.js";

export class FacturaHtml {
    constructor () {
        this.empresa = {
            nombre : document.querySelector ("#empresa-nombre"),
            direccion : document.querySelector ("#empresa-direccion"),
            telefono: document.querySelector ("#empresa-telefono"),
            nif : document.querySelector ("#empresa-nif"),
        }
        this.cliente = new Empresa(
            document.querySelector("#cliente-nombre"),
            document.querySelector("#cliente-direccion"),
            document.querySelector("#cliente-telefono"),
            document.querySelector("#cliente-nif")
        )
        this.elementosTabla = document.querySelector('#elementos-tabla')


        this.importeTotal = document.querySelector("#importe-total")
        this.tipoIVA = document.querySelector("#tipo-iva")
        this.formaPago = document.querySelector("#forma-pago")
        
        
    }
    pintarDatos(facturaDatos) {
        console.dir(facturaDatos)
        this.empresa.nombre.innerHTML = facturaDatos.empresa.nombre
        this.empresa.direccion.innerHTML = facturaDatos.empresa.direccion
        this.empresa.telefono.innerHTML = facturaDatos.empresa.telefono
        this.empresa.nif.innerHTML = facturaDatos.empresa.nif
        this.cliente.nombre.innerHTML = facturaDatos.cliente.nombre
        this.cliente.direccion.innerHTML = facturaDatos.cliente.direccion
        this.cliente.telefono.innerHTML = facturaDatos.cliente.telefono
        this.cliente.nif.innerHTML = facturaDatos.cliente.nif
        this.importeTotal.innerHTML = facturaDatos.importeTotal
        this.tipoIVA.innerHTML = facturaDatos.tipoIVA
        this.formaPago.innerHTML = facturaDatos.formaPago
        this.pintarTabla(facturaDatos.elementos)
    }
    pintarTabla(elementosDatos) {
        console.log(elementosDatos)
        let tabla =
            `<tr class="title">
                <th>Descripción</th>
                <th>Precio</th>
                <th>Cantidad</th>
            </tr>`
    
        elementosDatos.forEach(element => {
            tabla +=
            `<tr>
                <td>${element.descripcion}</td>
                <td>${element.precio}</td>
                <td>${element.cantidad}</td>
            </tr>`
        });
        this.elementosTabla.innerHTML = tabla
    }    
}
