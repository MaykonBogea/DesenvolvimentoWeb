// Bloco 3 (Controle de fluxo):

const classificarNota = (nota) =>{
    if (nota >= 6){
        return true
    }else{
        return false
    }
}

var corSemaforo = "Verde"

switch (corSemaforo) {
    case "Verde":
        console.log("Siga")
        break
    case "Vermelho":
        console.log("Pare")
        break
    case "Amarelo":
        console.log("Atenção")
        break
    default:
        console.log("Cor não reconhecida")
}

for(let i = 1; i <= 10; i++){
    console.log(`5 x ${i} == ${5*i}`)
}

var contador = 5
while (contador > 0){
    console.log(contador)
    contador--
}


for (i = 1; i <= 20; i++){
    if(i % 2 === 0){
        console.log(`${i} é par`)
    }else{
        console.log(`${i} é impar`)
    }
}

contador = 1

while(contador <= 20){
    if(contador % 2 === 0){
        console.log(`${contador} é par`)
    }else{
        console.log(`${contador} é impar`)
    }
    contador++
}

const diaDaSemana = (numero) => {
    switch(numero){
        case 1:
            return "Domingo"
        case 2:
            return "Segunda"
        case 3:
            return "Terça"
        case 4:
            return "Quarta"
        case 5:
            return "Quinta"
        case 6:
            return "Sexta"
        case 7:
            return "Sabado"
        default:
            return "Dia invalido"
    }
}

console.log(diaDaSemana(5))