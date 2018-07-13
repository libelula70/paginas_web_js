/* // Declarar una función: darle nombre
function miFuncion(x) {
    console.log(x)
}


// Asignar: darle valor
let x = 23


// Invocar, llamar, ejecutar: llamarla y pasarle el valor del parámetro
miFunción(23)

// Asignando el resultado de invocar
let z = calcular(12)


// OTRA FORMA DE CREAR FUNCIONES EN JS
let otraFuncion = function () {}
// esto es muy parecido a escribir
function otraFuncion () {} */


function verCalculos(x,y, operacion) {
    console.log("El resultado es " + operacion(x,y))
}
//callback anónimo
verCalculos(3,5, function(a,b) { return a*b})

//callback con nombre

function sumaCuadrados(x,y) {
    return x*x + y*y
}

verCalculos(3,5, sumaCuadrados)


