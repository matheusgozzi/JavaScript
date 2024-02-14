function carregar(){
var msg = window.document.getElementById('mensagem')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()


msg.innerHTML = `<p>Agora são ${hora} horas.</p>`

if(hora >= 6 && hora < 12 ){
    msg.innerHTML += `<p>Bom dia!</p>` 
    img.src = './imagens/fotomanha.jpg'
    document.body.style.backgroundColor = 'rgb(245, 230, 99)' 
} else if(hora >=12 && hora < 19){
    msg.innerHTML += `<p>Boa tarde!</p>` 
    img.src = './imagens/fototarde.jpg' 
    document.body.style.backgroundColor = 'rgb(243, 171, 37)' 
} else{
    msg.innerHTML += `<p>Boa noite!</p>` 
    img.src = './imagens/fotonoite.jpg'
    document.body.style.backgroundColor = 'rgb(23, 23, 107)'
}

}