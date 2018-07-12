
console.log (Math.random());
console.log (Math.random());
console.log (Math.random());
console.log (Math.random());
console.log (Math.random());
console.log (Math.random());
console.log (Math.random());
console.log (Math.random());
console.log (parseInt(Math.random()*10));
console.log(parseInt(Math.random()*10));


function letraDni(num) {
    if (isNaN(num+1) || num<1 || num>99999999) {
        return 'Error'
    }
        
    const aLetras=['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C',  'K', 'E'];
    return aLetras[num % 23]
}

console.log (letraDni(8725986325842587963))
console.log (letraDni(1000))
console.log (letraDni(23))
console.log (letraDni('pepe'))