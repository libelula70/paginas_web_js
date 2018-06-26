function calcularCirculo(radio) {
    return Math.PI*radio*radio
}

function calcularCircunf(radio) {
    return Math.PI*radio*2
}

/* function mostrar(circulo) {
    let mensaje='El resultado es'
    console.log(mensaje,circulo)
} */

function mostrarCirculo(radio, circulo) {
   /*  let mensaje='El área del círculo con radio '
    mensaje+=radio
    mensaje+=' es '
    mensaje+=circulo */
    let mensaje = `
    Resultado:
    El área del círculo con radio ${radio} es ${circulo}`
    console.log(mensaje)
}
function mostrarCircunf(radio, circunf) {
    let mensaje= `    La longitud de la circunferencia de radio ${radio} es ${circunf}`
    console.log(mensaje)
}


function main() {
    let radio=3
    mostrarCirculo(radio, calcularCirculo(radio))
    mostrarCircunf(radio, calcularCircunf(radio))
    radio=7
    mostrarCirculo(radio, calcularCirculo(radio))
    mostrarCircunf(radio, calcularCircunf(radio))
}

main()