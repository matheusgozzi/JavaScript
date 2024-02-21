let amigo = {nome:'José',
sexo: 'M',
peso:85.4,
engordar(p=0){
    console.log('engordou')
    this.peso += p 
}
}
amigo.engordar(1)
console.log(`${amigo.nome} pesa agora ${amigo.peso}`)