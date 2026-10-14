// ==========================================
// BLOCO 1 – Arrays e Métodos (map, filter, reduce, forEach)
// ==========================================
console.log("--- BLOCO 1: Arrays e Métodos ---");

// 1. Array de nomes
const nomes = ["Ana", "Carlos", "Beatriz"];
nomes.forEach(nome => console.log(`Olá, ${nome}!`));

const nomesMaiusculos = nomes.map(nome => nome.toUpperCase());
console.log("Nomes em maiúsculas:", nomesMaiusculos);

// 2. Array de preços
const precos = [10, 25, 40, 5, 60];
const precosAcimaDe20 = precos.filter(preco => preco > 20);
console.log("Preços acima de 20:", precosAcimaDe20);

const somaPrecos = precos.reduce((acumulador, preco) => acumulador + preco, 0);
console.log("Soma total dos preços:", somaPrecos);

// 3. Array de objetos produtos
const produtos = [
  { nome: "Caderno", preco: 15 },
  { nome: "Mochila", preco: 120 },
  { nome: "Caneta", preco: 4 },
  { nome: "Livro", preco: 45 }
];

const nomesProdutos = produtos.map(prod => prod.nome);
console.log("Nomes dos produtos:", nomesProdutos);

const produtosBaratos = produtos.filter(prod => prod.preco < 50);
console.log("Produtos com preço menor que 50:", produtosBaratos);

const somaProdutos = produtos.reduce((acc, prod) => acc + prod.preco, 0);
console.log("Soma dos preços dos produtos:", somaProdutos);

produtos.forEach(prod => console.log(`${prod.nome}: R$ ${prod.preco}`));


// ==========================================
// BLOCO 2 – Manipulação do DOM
// ==========================================
console.log("\n--- BLOCO 2: Manipulação do DOM ---");

// Selecionar o h1 e alterar o texto
const titulo = document.querySelector("#titulo");
titulo.textContent = "Blog do Desenvolvedor"; // Substitua pelo seu nome se preferir

// Selecionar todos os parágrafos (.texto) e imprimir no console
const paragrafos = document.querySelectorAll(".texto");
paragrafos.forEach(p => console.log(p.textContent));

// Selecionar a #lista e usar innerHTML para inserir 2 itens
const lista = document.querySelector("#lista");
lista.innerHTML += `
  <li>Item inserido via innerHTML 1</li>
  <li>Item inserido via innerHTML 2</li>
`;

// Criar um <li> com createElement, texto "Terceiro item" e adicionar com append
const novoLi = document.createElement("li");
novoLi.textContent = "Terceiro item";
lista.append(novoLi);

// Usar classList.add para aplicar a classe destaque e verificar com classList.contains
novoLi.classList.add("destaque");
console.log("Contém a classe 'destaque'?", novoLi.classList.contains("destaque"));

// Array de tarefas para renderizar dinamicamente
const tarefas = ["Estudar JS", "Fazer exercícios", "Revisar DOM"];
tarefas.forEach(textoTarefa => {
  const li = document.createElement("li");
  li.textContent = textoTarefa;
  lista.appendChild(li);
});

// Aplicar a classe 'feito' ao primeiro <li> da lista
if (lista.firstElementChild) {
  lista.firstElementChild.classList.add("feito");
}

// Imprimir a quantidade total de itens da lista
const totalItensLi = document.querySelectorAll("li").length;
console.log("Quantidade total de <li> na página:", totalItensLi);


// ==========================================
// BLOCO 3 – Eventos e Event Delegation
// ==========================================
console.log("\n--- BLOCO 3: Eventos e Event Delegation ---");

const botao = document.querySelector("#botao");
const inputNome = document.querySelector("#nome");
const formulario = document.querySelector("#formulario");
const inputTarefa = document.querySelector("#tarefa");

// 1. Listener de click no botão
botao.addEventListener("click", () => {
  console.log("Clicou!");
});

// 2. Listener de mouseover no botão
botao.addEventListener("mouseover", () => {
  botao.textContent = "Pode clicar!";
});

// 3. Listener de keyup no campo #nome
inputNome.addEventListener("keyup", (e) => {
  console.log("Valor atual do campo nome:", e.target.value);
});

// 4. Event Delegation na #lista (Um único listener para todos os <li> atuais e futuros)
lista.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("feito");
    console.log("Texto do item clicado:", e.target.textContent);
  }
});

// Criar um novo <li> via JS para testar se o Event Delegation funciona nele também
const liDinamico = document.createElement("li");
liDinamico.textContent = "Item dinâmico (testa delegação)";
lista.appendChild(liDinamico);

// 5. Formulário de Tarefas com preventDefault e .trim()
formulario.addEventListener("submit", (e) => {
  e.preventDefault(); // Evita o recarregamento da página

  const textoDigitado = inputTarefa.value.trim();

  // Se o campo estiver vazio, não adiciona nada
  if (textoDigitado === "") {
    return;
  }

  // Cria o novo <li>, adiciona à lista e limpa o campo
  const liNovoForm = document.createElement("li");
  liNovoForm.textContent = textoDigitado;
  lista.appendChild(liNovoForm);

  inputTarefa.value = "";
  inputTarefa.focus();
});