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
    let resultado=1
    //tengo que decirle un valor para que empieze a operar,
    // para ello necesito un valor neutro, en la multiplicación el 1 es neutro.

    switch (figura.toLowerCase()) {
        case 'triangulo':
        case 'triángulo':
            //datos {h:12.3, b:10.5}
            for (const key in datos) {
                resultado *=datos[key]
            }
            //en key son los datos del objeto.
            //en la primera vuelta key vale 12.3 y lo guarda en resultado
            //en la segunda vuelta key vale 10.5 y lo multiplica por resultado
            //que vale 12.3*1=12.3
            //y ahora me queda que divida resultado por 2.
            resultado /=2
            break;


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
            break;
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

probar ()

