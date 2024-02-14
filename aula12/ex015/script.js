function verificar(){
   var data =  new Date()
   var ano = data.getFullYear()
   var anoForm = document.getElementById('txtano')
   var res = document.getElementById('res')
   if(anoForm.value.length == 0 || anoForm.value > ano){
    window.alert('[ERRO] DADOS INVÁLIDOS! VERIFIQUE E TENTE NOVAMENTE')
   } else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(anoForm.value)
    res.innerHTML = `Idade calculada ${idade}`
    var genero = ''

    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if(fsex[0].checked){
        genero = 'Homem'
        if(idade >=0 && idade < 12){
            //crianca
            img.setAttribute('src', './imagens/homemcrianca.jpg')
        }else if(idade < 20 ){
            //jovem
            img.setAttribute('src', './imagens/homemjovem.jpg')
        } else if(idade < 60){
            //adulto
            img.setAttribute('src', './imagens/homemadulto.jpg')
        } else{
            //idoso
            img.setAttribute('src', './imagens/homemidoso.jpg') 
        }

    }   else{
        genero = 'Mulher'
        if(idade >=0 && idade < 12){
            //crianca
            img.setAttribute('src', './imagens/mulhercrianca.jpg')
        }else if(idade < 20 ){
            //jovem
            img.setAttribute('src', './imagens/mulherjovem.jpg')
        } else if(idade < 60){
            //adulto
            img.setAttribute('src', './imagens/mulheradulta.jpg')
        } else{
            //idoso
            img.setAttribute('src', './imagens/mulheridosa.jpg') 
        }
        
    }

    res.style.textAlign = 'center'
    res.innerHTML = `Verificado que é um(a) ${genero} de ${idade}.`
    res.appendChild(img)
    img.style.borderRadius = '50%'
    img.style.width = '250px'
    img.style.height = '250px'
   }
}