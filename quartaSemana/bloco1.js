nomes = ["Maykon", "Berg", "Cabral"]
nomes.forEach(nome => {
    console.log(`Olá ${nome}`)
});

nomesMaiusculos = nomes.map(nome => nome.toUpperCase())
console.log(nomesMaiusculos)

precos = [10, 25, 40, 5, 60]
precosMaioresQueVinte = precos.filter(preco => preco>20)
console.log(precosMaioresQueVinte)

contador = 0
console.log(precos.reduce( (preco, preco2) => preco + preco2, 0))

produtos = [
    {nome: "Caderno", preco: 15},
    {nome: "Lapis", preco: 2},
    {nome: "Caneta", preco: 3},
    {nome: "Bolsa", preco: 60}
]

nomeProdutos = produtos.map(produto => produto.nome)
console.log(nomeProdutos)

precosMaioresQueCinquenta = produtos.filter(produto => produto.preco > 50)
console.log(precosMaioresQueCinquenta)

totalPrecos = produtos.reduce((precos, preco2) => precos + preco2.preco, 0)
console.log(totalPrecos)

produtos.forEach( produto =>{
    console.log(`${produto.nome}: R$${produto.preco}`)
})