# Entregável de Desenvolvimento Web – Semana 05
## Objetos, Dados e Assincronismo

Repositório dedicado à entrega das atividades práticas envolvendo consumo de APIs (`Fetch`, `async/await`), manipulação segura do DOM (`createElement`, `textContent`, `replaceChildren`) e tratamento robusto dos quatro estados da tela (Carregando, Erro, Vazio e Sucesso).

---

## 🚀 Funcionalidades Desenvolvidas
- **Parte 1:** Manipulação, filtragem, validação e redução de um array de objetos de pedidos em JavaScript puro.
- **Parte 2:** Buscador de CEP integrado à API ViaCEP com validação de formato, tratamento de timeouts (`AbortSignal`), gerenciamento de estados e histórico de buscas.
- **Parte 3:** Mini Pokédex integrada à PokéAPI com tratamento específico para erro 404 e proteção contra vulnerabilidades de XSS na renderização de dados.

---

## 🧠 Parte 4 – Reflexão (Para Pensar)

### Por que `Promise.all` pode ser mais rápido que vários `await` seguidos?

O uso sequencial de `await` faz com que a execução do código pare e aguarde a resolução de uma promise individual antes de avançar para a próxima linha. Dessa forma, o tempo total gasto na operação é a **soma matemática** dos tempos de todas as requisições (`Tempo 1 + Tempo 2 + Tempo 3`).

Em contrapartida, o método `Promise.all()` dispara **todas as requisições simultaneamente (em paralelo)** e aguarda coletivamente até que todas estejam resolvidas. Com isso, o tempo total da operação passa a ser limitado exclusivamente pela requisição mais lenta, otimizando o fluxo de rede e a performance geral da aplicação.