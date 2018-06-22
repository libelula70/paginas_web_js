function saludar(user) {
    const SALUDO='Hola'
    console.log(SALUDO, user)
}

saludar('Pepe')
saludar('Elena')

function sumar(a,b) {
    let resultado=a+b
    console.log(resultado)
}

sumar(2,4)


// esto lo añade el compilador var autor 

function saludar(pUser) {
    const SALUDO = 'Hola'
    console.log(SALUDO, pUser)
    autor = 'Alberto'
}

function sumar(a,b) {
    let resultado = a + b
    console.log(resultado)
    
}



saludar('Pepe')
// variable global -> hiting
var autor = 'Alejandro'

saludar('Elena')
sumar(2,4)
dividir(4,2)
dividir(4,0)


function dividir (a,b) {
            if (b != 0) {
        var resultado = a / b 
    }
    else {
        resultado='No se puede dividir por 0'
    }
    console.log(resultado)}