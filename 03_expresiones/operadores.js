let x=23
let y
y=x++ //x=x+1 y luego y=x
y=++x //y=x y luego x=x+1
console.log(x)
/* console.log(x++) */
console.log(++x)




function asignaciones () {
    let x=2
    x+=1  //x=x+1
}

function esPar (a) {
    let isPar=true
    if (a % 2) {
        isPar=false
    }
    return isPar
}

console.log(22, esPar(22))
console.log(25, esPar(25))

console.log(Boolean(22))

//falsy:
false
0
''
undefined