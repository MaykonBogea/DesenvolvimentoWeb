//Bloco 2 (Funções):

try{
    console.log(ehMaiorDeIdadeExpressao(19))
}catch(e){
    console.error(e)
}

function ehMaiorDeIdade(idade){
    if(idade >= 18){
        return true
    }else{
        return false
    }
}

const ehMaiorDeIdadeExpressao = function (idade){
    if (idade >= 18){
        return true
    }else{
        return false
    }
}

function dobro(numero){
    return numero * 2
}

const dobroExpressao = function (numero){
    return numero * 2
}

const dobroArrow = (numero) =>{
    return numero * 2
}

const dobroOu2 = (numero = 1) =>{
    return numero * 2
}

