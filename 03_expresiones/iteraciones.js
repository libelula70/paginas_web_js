// Iteraciones
//for
//while
//do




function iterar () {
    for (let i = 0; i < 3; i++) {
        console.log(`Soy la vuelta ${i+1}`)
    }
}

function iterarInversa () {
    for (let i = 3; i > 0; i--) {
        console.log(`Soy la vuelta ${i}`)
    }
}

iterar ()
iterarInversa()

/**
 * Función factorial.
 * Producto de un número por todos los que le preceden
 * e.g. 5!=5*4*3*2*1
 * e.g. 5!=1*2*3*4*5
 * 
 * @param num: number
 * @return factorial: number
 * 
 * 
 */



function factorial(num) {
    let factorial=1
    for (let i = 1; i <= num; i++) {
        factorial=factorial*i
    }
    return factorial
}



function factorialInverso(num) {
    let factorial=1
    for (let i=num; i>0; i--) {
        factorial=factorial*i
    }
return factorial
}

console.log(factorial(5))
console.log(factorialInverso(5))

function totalizar(aDatos) {
    let num = 0
    for (let i = 0; i < aDatos.length; i++) {
        num += aDatos[i];
        
    }
    return num

}

aDatos = [2,3,5,7,9]
console.log(`El total es ${totalizar(aDatos)}`)



function leerArray(ad) {
    let n =''
    for (let i = 0; i < ad.length; i++) {
        n += `
        El usuario es ${i+1} es ${ad[i]}`
    }
    return n
}
let aNombres = ['Pepe', 'Rosa', 'Luis', 'María']
console.log(leerArray(aNombres))

/* function leerArray(aDatos) {
    let r = ''
     for (let i = 0; i < aDatos.length; i++) {
        r += `
        El usuario ${i+1} es ${aDatos[i]}`
    }
    return r
}

let aNombres = ['Pepe', 'Rosa', 'Luis', 'Maria']
console.log(leerArray(aNombres)) */