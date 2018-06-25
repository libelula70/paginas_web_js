var global=12

function calcular(pDato) {
    global+=pDato
    return global;
}

console.log(calcular(10))


function disminuir() {
    if (true) {
        var local = 2
        let tambienLocal = 3
        const LOCAL = 4
        
        console.log(local) //2
        console.log(tambienLocal) //3
        console.log(LOCAL) // 4
    
    }
    
    console.log(local) //2
    console.log(tambienLocal) //undefined
    console.log(LOCAL) // undefined
}

