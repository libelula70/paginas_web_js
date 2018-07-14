function despertador3 (dia) {
    let mensaje = ''
    if (dia=='L') {
        mensaje = `Hoy es lunes, 7:00 de la mañana, arriba!!`
        return mensaje
    } else if (dia=='M') {
        dia = 'martes'
        mensaje = 'Hoy es martes, 7:00 de la mañana, otro día más'
    } else if (dia=='X') {
        mensaje = 'Hoy es miércoles, 7:00 de la mañana, vamos perezoso'
    } else if (dia=='J') {
        mensaje = 'Hoy es jueves, 7:00 de la mañana, ya queda menos para el viernes'
    } else if (dia=='V') {
        mensaje = 'Hoy es viernes, 7:00 de la mañana, por fin llegó el viernes'
    } else if (dia=='S') {
        mensaje = 'Por fin es sábado, 12:00 de la mañana, que bien he dormido'
    } else if (dia=='D') {
        mensaje= `El domingo, 12:00 de la mañana, tengo que aprovechar el día`
    } else {
        mensaje = 'Este dato no es correcto'
    }
    return mensaje
  }
  despertador3 ()
  console.log(despertador3 ('Y'))