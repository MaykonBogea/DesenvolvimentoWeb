// Bloco 1 (Fundamentos e Variaveis):
let pontos = 10
pontos += 10
console.log(pontos)

const MAX_PONTOS = 100
try{
    MAX_PONTOS += 10
}catch(e){
    console.error(e);
}

var texto = "Opaa"
var numero = 20
var boleano = false
var indefinido
var nulo = null

console.log(typeof(texto))
console.log(typeof(numero))
console.log(typeof(boleano))
console.log(typeof(indefinido))
console.log(typeof(nulo))

console.log(`Texto: ${texto} e Numero: ${numero}`)
console.log("Texto: " + texto + " e Numero: " + numero)

