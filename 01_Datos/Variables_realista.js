

function calcular(pTotal, pIncremento) {
    pTotal = pTotal + pIncremento
    return pTotal;
}

function main1() {
    let total = 12
    let incremento = 10
    console.log(calcular(total, incremento)) //22
    console.log(total) //12
}






console.log(calcular(10))


function disminuir2() {
    let local = 2
    const LOCAL = 4
    if (true) {
        local += LOCAL
    }        
        console.log(local) //2
        console.log(LOCAL) // 4
    }
    
   
function disminuir3() {
    let local
    local = 2
    const LOCAL
    LOCAL = 4
    local -= LOCAL
        
    console.log(local) //-2
    console.log(LOCAL) // 4
}
