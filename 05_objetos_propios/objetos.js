let oVuelo = {
    airline:'Oceanic',
    number:'815',
    departure : {
        clave_IATA : 'SYD',
        time: '2004-09-22 14:55',
        ciudad: 'Sydney'
    },
    arrival: {
        clave_IATA : 'LAX',
        time: '2004-09-23 10:42',
        ciudad: 'Los Angeles'
    }
}

oVuelo.mostrar = function (oDatos = this) {
    for (const key in oDatos) {
        if (oDatos.hasOwnProperty(key) && (typeof oDatos[key] !== 'function')) {
            if (typeof oDatos[key] === 'object') { 
                console.log(`Propiedades de ${key} son: `)
                this.mostrar(oDatos[key])
            } else {
                console.log(`${key} : ${oDatos[key]}`)
            }    
        }    
    }
}


// console.log(oVuelo)
oVuelo.mostrar()
//console.log(typeof oVuelo)
//console.log(oVuelo instanceof Object)


aDatos = []
//console.log(aDatos instanceof Object)
//console.log(aDatos instanceof Array)

let oVueloVacio = {
    airline:'',
    number:'',
    departure : {
        clave_IATA : '',
        time: '',
        ciudad: ''
    },
    arival: {
        clave_IATA : '',
        time: '',
        ciudad: ''
    }
}

let OVuelo1 = Object.create(oVueloVacio)

