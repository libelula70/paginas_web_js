function algo(x) {}

let o = function () {
    let o1 = function () {

    }
}

algo(o)
algo(function () {})


//Formas de crear funciones

function suma1(a,b) {
    return a+b
}

let suma2 = function (a,b) {
    return a+b
}


//ES6 Funciones Arrow o Lambdas
let suma3a = (a,b) => {return a+b}
let suma3b = (a,b) => a+b

let cuadrado = a => a*a




console.log(suma1(5,6));
console.log(suma2(5,6));