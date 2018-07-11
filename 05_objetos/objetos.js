let oVuelo = {
    airline: 'Oceanic',
    number: '815',
    departure: {
        clave_IATA: 'SYD',
        time: '2004-09-22 14:55',
        ciudad: 'Sydney',
    },
    arrival: {
        clave_IATA: 'LAX',
        time: '2004-09-23 10:42',
        ciudad: 'Los Angeles'
    },
}
console.log(oVuelo)


oVuelo.mostrar =function(oDatos = this){
    for (const key in oDatos) {
        if(typeof oDatos[key] === 'function') {

        } else if (typeof oDatos[key] === 'object') {
        console.log(`Las propiedades de ${key} son: `)
        this.mostrar(oDatos[key])
        } 
        else {
         console.log(`La propiedad ${key} vale ${oDatos [key]}`)
        }
    }
}

console.clear()
oVuelo.mostrar()


for (const key in object) {
     {
        const element = object[key];
        
    }
}

oVuelo.mostrar=function(oDatos = this){
    for (const key in oDatos) {
        if (oDatos.hasOwnProperty(key)&&(typeof oDatos[key] !== 'function')) {
            if (typeof oDatos[key] === 'object') {
            console.log(`Las propiedades de ${key} son: `)
            this.mostrar(oDatos[key])
        } else {
         console.log(`La propiedad ${key} vale ${oDatos [key]}`)
        }
    }
}
}
console.log(oVuelo)