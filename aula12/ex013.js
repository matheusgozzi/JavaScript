var agora = new Date()
var diaSem = agora.getDay()

console.log(diaSem)

switch(diaSem){
    case 0: 
    console.log('Hoje é DOMINGO!')
    break
    case 1:
        console.log('Hoje é SEGUNDA!')
    break
    case 2:
        console.log('Hoje é TERÇA')
    break
    case 3:
        console.log('Hoje é QUARTA')
    break
    case 4:
        console.log('Hoje é QUINTA')
    break
    case 5:
        console.log('Hoje é SEXTA')
    case 6:
        console.log('Hoje é SÁBADO')
    break

    default:
    console.log('[ERRO] Algo deu errado.')
        break   
}