let valores = [8, 7, 1 , 2, 3, 5, 4]
//percurso para exibição do vetor.
for(let posicao=0; posicao <= valores.length ; posicao++){
    console.log(`A posição ${posicao} tem o valor ${valores[posicao]}`)
}

//outra alternativa FOR IN  
valores.sort()

for(let posicao in valores){
    console.log(`Neste outro modo a posicao ${posicao}, tem o valor ${valores[posicao]}`)
}

//buscando posicao do valor dentro do array

let pos = valores.indexOf(7)
console.log(`O 7 está na posição ${pos}`)
