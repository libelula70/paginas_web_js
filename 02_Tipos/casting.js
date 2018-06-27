function operar() {
    let num1 ='22'
    console.log(typeof num1)
    let num2 = 2
    console.log(typeof num2)
    // resultado = num1 + String(num2)
    let resultado = num1*num2
    console.log(typeof resultado)
}

function operarCadenas() {
    let num1 ='Hola'
    console.log(num1, typeof num1)
    let num2 = 'Pepe'
    console.log(num2, typeof num2)
    let resultado = num1*num2
    console.log(resultado, typeof resultado)
    console.log(isNaN(resultado))
}

operarCadenas()
