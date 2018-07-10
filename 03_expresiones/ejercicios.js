
 function primo(numero) {

    for (let i = 2; i < 100; i++) {
  
      if (numero % i === 0) {
        return false;
      }
  
    }
  
    return numero !== 1;
  }
console.log(primo(40))



function fibonacci(n){
    let a=0;
    let b=1;
 
    for(i=0; i<n;i++){
        let numero=a;
        a=b;
        b=numero+b;
    }
       return(a+" ");
}
