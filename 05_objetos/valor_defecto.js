function calculaPrecio(precioBase, iva = 1.21) {
    return precioBase * iva
}

let zapatillas = 300
calculaPrecio(zapatillas)
let libro = 250
calculaPrecio(libro, 1.07)