// ==========================================
// PARTE 1 – Manipulação e Validação de Dados
// ==========================================
const pedidos = [
  { cliente: "Bia", valor: 120.0, status: "pago" },
  { cliente: "Carlos", valor: 0, status: "pendente" },
  { cliente: "", valor: 50.0, status: "pago" },
  { cliente: "Ana", valor: 200.5, status: "pago" },
  { cliente: "João", valor: -10, status: "pago" }
];

// Validação (cliente não vazio e valor numérico maior que 0)
const pedidosValidos = pedidos.filter(pedido => {
  const clienteValido = typeof pedido.cliente === "string" && pedido.cliente.trim() !== "";
  const valorValido = typeof pedido.valor === "number" && pedido.valor > 0;
  return clienteValido && valorValido;
});

// Filtragem dos pedidos pagos
const pedidosPagos = pedidosValidos.filter(pedido => pedido.status === "pago");

// Cálculo do total faturado com reduce
const totalFaturado = pedidosPagos.reduce((acumulador, pedido) => acumulador + pedido.valor, 0);

// Geração de textos formatados com toFixed(2)
const resumoPedidos = pedidosPagos.map(pedido => `${pedido.cliente} — R$ ${pedido.valor.toFixed(2)}`);

console.log("--- Parte 1: Dados Processados ---");
console.log("Resumo:", resumoPedidos);
console.log(`Total Faturado: R$ ${totalFaturado.toFixed(2)}`);


// ==========================================
// PARTE 2 – Mini Projeto: Buscador de CEP
// ==========================================
const formCep = document.getElementById("form-cep");
const inputCep = document.getElementById("input-cep");
const btnCep = document.getElementById("btn-cep");
const statusCep = document.getElementById("status-cep");
const resultadoCep = document.getElementById("resultado-cep");
const historicoCep = document.getElementById("historico-cep");

const historicoBuscas = [];

formCep.addEventListener("submit", async (e) => {
  e.preventDefault();
  const cepLimpo = inputCep.value.trim();

  // Validação: apenas dígitos e exatamente 8 caracteres
  const regexCep = /^\d{8}$/;
  if (!regexCep.test(cepLimpo)) {
    exibirErroCep("CEP inválido! Deve conter exatamente 8 dígitos numéricos.");
    return;
  }

  // Estado: Carregando
  mudarEstadoCarregandoCep(true);

  try {
    const resposta = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`, {
      signal: AbortSignal.timeout(5000)
    });

    if (!resposta.ok) {
      throw new Error(`Erro HTTP: ${resposta.status}`);
    }

    const dados = await resposta.json();

    // Estado: Vazio / Não Encontrado
    if (dados.erro) {
      exibirErroCep("CEP não encontrado.");
      return;
    }

    // Estado: Sucesso
    exibirSucessoCep(dados);
    adicionarAoHistorico(cepLimpo);

  } catch (erro) {
    // Estado: Erro (Rede, Timeout ou HTTP)
    console.error(erro);
    exibirErroCep("Falha na conexão ou tempo limite esgotado. Tente novamente.");
  } finally {
    mudarEstadoCarregandoCep(false);
  }
});

function mudarEstadoCarregandoCep(carregando) {
  if (carregando) {
    btnCep.disabled = true;
    statusCep.textContent = "Buscando...";
    resultadoCep.replaceChildren();
  } else {
    btnCep.disabled = false;
  }
}

function exibirErroCep(mensagem) {
  statusCep.textContent = mensagem;
  resultadoCep.replaceChildren();
}

function exibirSucessoCep(dados) {
  statusCep.textContent = "";
  resultadoCep.replaceChildren();

  const campos = [
    { dt: "Rua", dd: dados.logradouro || "Não informado" },
    { dt: "Bairro", dd: dados.bairro || "Não informado" },
    { dt: "Cidade", dd: dados.localidade || "Não informado" },
    { dt: "UF", dd: dados.uf || "Não informado" }
  ];

  campos.forEach(item => {
    const dt = document.createElement("dt");
    dt.textContent = item.dt;
    const dd = document.createElement("dd");
    dd.textContent = item.dd;
    resultadoCep.appendChild(dt);
    resultadoCep.appendChild(dd);
  });
}

function adicionarAoHistorico(cep) {
  if (!historicoBuscas.includes(cep)) {
    historicoBuscas.push(cep);
    const li = document.createElement("li");
    li.textContent = cep;
    historicoCep.appendChild(li);
  }
}


// ==========================================
// PARTE 3 – Tarefa de Casa: Desafio Mini Pokédex
// ==========================================
const formPokedex = document.getElementById("form-pokedex");
const inputPokemon = document.getElementById("input-pokemon");
const btnPokemon = document.getElementById("btn-pokemon");
const statusPokedex = document.getElementById("status-pokedex");
const resultadoPokedex = document.getElementById("resultado-pokedex");

formPokedex.addEventListener("submit", async (e) => {
  e.preventDefault();
  const nomePokemon = inputPokemon.value.trim().toLowerCase();

  if (!nomePokemon) {
    statusPokedex.textContent = "Por favor, digite o nome de um Pokémon.";
    return;
  }

  // Estado: Carregando
  btnPokemon.disabled = true;
  statusPokedex.textContent = "Buscando...";
  resultadoPokedex.replaceChildren();

  try {
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`, {
      signal: AbortSignal.timeout(5000)
    });

    if (!resposta.ok) {
      if (resposta.status === 404) {
        throw new Error("Pokémon não encontrado.");
      }
      throw new Error(`Erro HTTP: ${resposta.status}`);
    }

    const pokemon = await resposta.json();

    // Estado: Sucesso
    statusPokedex.textContent = "";

    const container = document.createElement("div");
    
    const nomeEl = document.createElement("h3");
    nomeEl.textContent = pokemon.name.toUpperCase();

    const imgEl = document.createElement("img");
    imgEl.src = pokemon.sprites.front_default;
    imgEl.alt = `Sprite de ${pokemon.name}`;

    const tiposEl = document.createElement("p");
    const tiposArr = pokemon.types.map(t => t.type.name).join(", ");
    tiposEl.textContent = `Tipos: ${tiposArr}`;

    container.appendChild(nomeEl);
    container.appendChild(imgEl);
    container.appendChild(tiposEl);

    resultadoPokedex.appendChild(container);

  } catch (erro) {
    // Estado: Erro / Não Encontrado
    console.error(erro);
    statusPokedex.textContent = erro.message === "Pokémon não encontrado." 
      ? "Pokémon não encontrado." 
      : "Falha na conexão ao buscar o Pokémon.";
  } finally {
    btnPokemon.disabled = false;
  }
});