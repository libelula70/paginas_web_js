function aumentar(pIndice) {
    pIndice +=1
    return pIndice
}


let indice=1
indice=2

aumentar()

let oLibro={
    titulo: 'LOTR',
    indice: 1
}

console.log(typeof oLibro)
console.log(oLibro)

oLibro2=oLibro
oLibro.indice=2


//operaciones con elementales

let a=5
let b=a
a+=5
console.log(a) //10
console.log(b) //5

