/**
*
*@param 'Día de la semana'
*@return 'Hora de la alarma' -> 7:00 // 12:00
            y "comienza el <dia>"
*
*/

function despertador (dia) {
    let hora = '12:00'
    
    if (dia=='L') {
        hora= '7:00'
        dia='lunes'
    } else if (dia=='M') {
        hora= '7:00'
        dia='martes'
    } else if (dia=='X') {
        hora= '7:00'
        dia='miércoles'
    } else if (dia=='J') {
        hora= '7:00'
        dia='jueves'
    } else if (dia=='V') {
        hora= '7:00'
        dia='viernes'
    } else if (dia=='S') {
        hora= '12:00'
        dia='sábado'
    } else if (dia=='D') {
        hora= '12:00'
        dia='domingo'
    } else {
        'Este valor no es correcto'
    }
       

    return `${hora}, comienza el ${dia}`;
}

function probar () {
    let dia='L'
    console.log(`Si tu día es ${dia}`, despertador (dia)) // 7:00
    dia='M'
    console.log(`Si tu día es ${dia}`, despertador (dia)) // 7:00
    dia='S'
    console.log(`Si tu día es ${dia}`, despertador (dia)) // 7:00
    dia='D'
    console.log(`Si tu día es ${dia}`, despertador (dia)) // 7:00
    dia='Y'
    console.log(`Si tu día es ${dia}`, despertador (dia))
}

probar ()


function despertador2(dia) {
    let hora = ''
    switch (dia) {
        case 'L':
            hora = '7:00'
            dia = 'Lunes'
            break;
        case 'M':
            hora = '7:00'
            dia = 'Martes'
            break;
        case 'X': 
            hora = '7:00'
            dia = 'Miercoles'
            break;
        case 'J': 
            hora = '7:00'
            dia = 'Jueves'
            break;
        case 'V' :
            hora = '7:00'
            dia = 'Viernes'
            break;
        case 'S' :
            hora = '12:00'
            dia = 'Sábado'
            break;
        case 'D':
            hora = '12:00'
            dia = 'Domingo'  
            break;
        default:
            hora = '0:00'
            dia = "Error de día"
    }
    return `${hora}, comienza el ${dia}`
}

function probar2 () {
    let dia = 'L'
    console.log(`Si tu dia es ${dia}`, despertador2(dia)) // 7:00
    dia = 'M'
    console.log(`Si tu dia es ${dia}`, despertador2(dia)) // 7:00
    dia = 'S'
    console.log(`Si tu dia es ${dia}`, despertador2(dia)) // 12:00
    dia = 'D'
    console.log(`Si tu dia es ${dia}`, despertador2(dia)) // 12:00
    dia = 'Z'
    console.log(`Si tu dia es ${dia}`, despertador2(dia)) // 12:00
}

probar2()



