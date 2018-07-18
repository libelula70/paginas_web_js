let persona1 = {
    nombre: 'Pepe',
    edad: 33,
    profesion: 'Informático',
    saludar: function() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`)
    }
}

//persona1.saludar()
//console.log(persona1.nombre, persona1.edad)
//console.log(persona1.constructor)
console.log(persona1)

function Persona (nombre, edad, profesion) {
    this.nombre = nombre
    this.edad = edad
    this.profesion = profesion
    this.saludar = function() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`)
    }
}
let persona2 = new Persona('Pepe', 22, 'Informático')
console.log(persona2)
persona2.saludar()
//console.log(persona2.constructor)

let persona3 = new Persona('Luis', 33, 'Bombero')
console.log(persona3)
persona3.saludar()