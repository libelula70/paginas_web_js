aLista = [{nombre:"Ana", edad: 22},
    {nombre:"Carlos", edad: 16},
    {nombre:"Alicia", edad: 14},
    {nombre:"Jose", edad: 34},
    {nombre:"Luis", edad: 30},
    {nombre:"Luisa", edad: 45}]

let aClon = aLista.slice(0,aLista.length)

aLista.sort(function(a, b) {
    return (a.nombre> b.nombre) ? 1 : 0})

console.log(aLista)



/* aLista.sort(function (a, b) {
    return (a.edad - b.edad)})

console.log(aLista) */

poins = [40,100,1,5,25,10]

poins.sort()
console.log(poins)
