function media (a,b,c) {
    return (a+b+c)/3
}

function mediaArray(aDatos){
    let suma=0
    for (let i = 0; i < aDatos.length; i++) {
        suma += aDatos[i];
        
    }
    return suma/aDatos.length
}


function mediaArg(){
    console.log(arguments)
    let suma=0
    for (let i = 0; i < arguments.length; i++) {
        suma += arguments[i];
        
    }
    return suma/arguments.length
}

function mediaSpread(...aDatos){
    let suma=0
    for (let i = 0; i < aDatos.length; i++) {
        suma += aDatos[i];
        
    }
    return suma/aDatos.length
}

function calculaEstadisticos(operacion,...aDatos){
    
}


console.log(media(2,4,6))
console.log(mediaArray([2,4,6,8,12]))
console.log(mediaArg(2,4,6, 8,12))
console.log(mediaSpread(2,4,6, 8,12))

console.log(calculaEstadisticos('varianza', 2,4,6, 8,12))
