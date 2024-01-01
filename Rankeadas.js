// imput
let playerName = "Totó"
let wins = 20
let loses = 3

// Variáveis para armazenar o retorno das funções
let result = saldoVitorias()
let rank = getRank()

// função que calcula o saldo das vitórias
function saldoVitorias (){
  let saldo = wins - loses
  return saldo
}

//função que atribui o ranking ao personagem
function getRank(){
  let rankName = ""
  switch(true){
    case ((result > 0) && (result <= 10)):
      rankName = "Ferro" 
      break
    case ((result > 10) && (result <= 20 )):
      rankName = "Bronze"
      break
    case ((result > 20) && (result <= 50)):
      rankName = "Prata"
      break
    case ((result > 50) && (result <= 80)):
      rankName = "Ouro"
      break
    case ((result > 80) && (result <= 90)):
      rankName = "Diamante"
      break
    case ((result > 90) && (result <= 100)):
      rankName = "Lendário"
      break
    case (result > 100):
      rankName = "Imortal"
      break
    default :
    rankName = "abaixo da média"
  }
  return rankName
}

// output
console.log("O herói possui um saldo de " + result + " vitórias e está no nível de " + rank)