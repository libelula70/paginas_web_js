
function primo(numero) {

    for (let i = 2; i < 100; i++) {
  
      if (numero % i === 0) {
        return 'Este número no es primo';
      }
}
  
    return numero !== 1;
  }
console.log(primo(10))



function fibonacci(numero){
  let a=0 //a=b
  let b=1 //b=c
  let c
  console.log(a)
  console.log(b)
  for (let i = 2; i < numero; i++) {
    c=a+b
    console.log(c)
    a=b
    b=c
    
    } 
}
console.log(fibonacci(2))



