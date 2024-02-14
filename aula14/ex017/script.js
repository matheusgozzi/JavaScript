function calcular(){

    var inicio = document.getElementById('numeroInicio')
    var fim = document.getElementById('numeroFim')
    var passo = document.getElementById('numeroPasso')
    var res = document.getElementById('res')
//traduzir os numeros
    var nInicio = Number(inicio.value)
    var nFim = Number(fim.value)
    var nPasso = Number(passo.value)

    if (nPasso <= 0){
        window.alert('Passo inválido, sendo assim contarei com PASSO 1')
        nPasso = 1
    }


    if(inicio.value.length == '0' || fim.value.length == '0' || passo.value.length == '0'){
        window.alert('[ERRO] | Preencha todos os campos para o funcionamento correto.')
        
    } else{

        if(nInicio < nFim){
                for(var c = nInicio; c <= nFim; c+= nPasso){
                    res.innerHTML += `${c}\u{27A1}`
            }   res.innerHTML += `FIM\u{1F3C1}`
        } else{
            for(var c = nInicio; c >= nFim; c-= nPasso){
                res.innerHTML += `${c}\u{27A1}`
            } res.innerHTML += `FIM2\u{1F3C1}`
        } 
    }  
   
}
