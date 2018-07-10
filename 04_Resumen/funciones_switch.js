// Declaración

/**
 * 
 * Calcular área de diversas figuras
 * 
 * @param:string nombre de la figura
 * @param:objeto datos de la figura
 *  si es triángulo h y b
 *  si es un cuadrado l
 *  si es círculo r
 * @return:number área de la figura
 */
function calcularArea (figura, datos) {
    let resultado=0

    switch (figura.toLowerCase()) {
        case 'triangulo':
        case 'triángulo':
            resultado = (datos.h*datos.b)/2
            break;
        case 'cuadrado':
            resultado = datos.l*datos.l
            break;
        case 'circulo':
        case 'círculo':
            resultado = datos.r*datos.r *Math.PI
            break;
        default:
        throw('Operación no permitida')
    }
    return resultado.toFixed(2)
}


// Uso o invocación
function probar() {
    let figura = 'triánguLO'
    let datos = {h:12, b:10}
    console.log(calcularArea (figura, datos))
    figura= 'cuadrado'
    datos= {l:10}
    console.log(calcularArea(figura, datos))
    figura= 'círculo'
    datos= {r:8}
    console.log(calcularArea(figura, datos))
}



try {
    let figura='pentagono'
    let datos={}
    console.log(calcularArea(figura,datos))
}catch(error) {
    console.log(error)
}


probar ()