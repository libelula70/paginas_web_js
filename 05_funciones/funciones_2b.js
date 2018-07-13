function verResultados(x, y, operacion) {
    let r
    if (typeof operacion === 'function') {
        r = operacion(x,y)
    }
    console.log('El resultado es ' + r);
} 

function sumaCuadrados (a,b) {
    return a*a+b*b
}

function sumaCubos(a,b) {
    return a*a*a+b*b*b
}

verResultados(2,3, sumaCuadrados)
verResultados(2,3, sumaCubos)

//callback anónima
verResultados(2,3, function(a,b) {return a*a+b*b})
verResultados(2,3, function(a,b) {return a*a*a+b*b*b})

setTimeout(
    function() {
        console.log("Han pasado 3 segundos" )
    }, 3000
)

function saludar () {
    console.log('Hola')
}
setTimeout(saludar, 2000)

function saludar() {
    console.log('Hola');
    i++
    if (i > 10) {
        clearInterval(id)
    }
}
let i = 0
let id = setInterval(saludar, 1000)