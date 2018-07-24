let pepe = {
    nombre : 'Pepe',
    direccion: {
        calle: 'c/ Pez',
        poblacion: 'Madrid'
    },
    saludar : function () {
        console.log(`Hola, soy ${this.nombre}`);
    }
}


/* jose = pepe
jose.saludar()
pepe.saludar() */


let saludarFuera = pepe.saludar

pepe.saludar()
saludarFuera()
saludarFuera.call(pepe)

setTimeout(pepe.saludar,3000)


setTimeout(pepe.saludar.bind(pepe),3000)
