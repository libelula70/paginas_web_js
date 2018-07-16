aNombres=['Pepe', 'Luis', 'Arancha', 'Rosa', 'Maria', 'Juan', 'Rosa']

/* for (let i = 0; i < aNombres.length; i++) {
    const item = aNombres[i]
    console.log(`El usuario ${i+1} se llama ${item}`)
} */

/* aNombres.forEach(
    function(item, i) {console.log (`El usuario ${i+1} se llama ${item}`)}
) */

aNombres.forEach(
    (item, i) => console.log(`El usuario ${i+1} se llama ${item}`)
)


let aNumbers = [2,5,7,8,9]
aNumbers.forEach(
    function(item, i) {
        let cuadrado = item*item
        console.log (`El cuadrado de ${item} es ${cuadrado}`)}
)

let aCuadrados = aNumbers.map(
    (item) => {return item*item}
)

console.log(aCuadrados)

let aNumbersClon = aNumbers.map(item=>item)

aNumbersClon.pop()
console.log(aNumbersClon)
console.log(aNumbers)


let aPares = aNumbers.filter(item => !(item % 2))

let aImpares = aNumbers.filter(item => !!(item % 2))

console.log(aPares)
console.log(aImpares)

let sonTodosPares = aNumbers.every ((item) => {
    item => !(item % 2)
})
console.log(sonTodosPares)

let hayAlgunPar = aNumbers.some(item => !(item % 2))
console.log(hayAlgunPar)

let valorFinal = aNumbers.reduce((a,b) => a+b)
console.log(valorFinal)

let valorFinal2 = aNumbers.reduceRight((a,b) => a+b)
console.log(valorFinal2)