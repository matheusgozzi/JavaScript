function soma(n1=0, n2=0){
    return n1 + n2
}

//se nao passar nada, será considerado 0!
console.log(soma(1, 2))

function fatorial(n){
    let fato = 1
    for(let c = n; c > 1; c-- ){
        fato *= c        // *= significa que o fato recebera "=" o fato vezes o c.
    } return fato
}

console.log(fatorial(5))

//recursividade 

function fatorialRecursivo(n){
    if(n == 1){
        return 1
    } else{
        return n * fatorialRecursivo(n-1)
    }
}

console.log(fatorialRecursivo(4))