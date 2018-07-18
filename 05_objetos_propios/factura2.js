let factura1 = {}

factura1.empresa = {
    nombre: 'Boracay Ediciones',
    direccion: 'Cl. Pez',
    telefono: '915 55 56 89',
    nif: '48956217-A'
    }

factura1.cliente = {    
    nombre: 'Librería Tautalug',
    direccion: 'Cl. Tortuga',
    telefono: '915 58 45 12',
    nif: '12854751-B'
    }

factura1.elementos = []

factura1.elementos[0] =
    {descripcion: 'La Isla del Tesoro',
    precio: 30,
    cantidad: '10'}

factura1.elementos[1] =
    {descripcion: 'Drácula',
    precio: 75,
    cantidad: '5'}

factura1.elementos[2] =
    {descripcion: 'El Señor de los Anillos',
    precio: 50,
    cantidad: '24'}

factura1.importeTotal = 0
factura1.tipoIva = 1.04,
factura1.formaPago = 'Transferencia'

