# 📌 Entregável de Desenvolvimento Web – (Arrays, DOM e Eventos) – Semana 04

Finalização da resolução dos desafios práticos propostos na aula de Arrays, DOM e Eventos. Os códigos devem ser entregues em um repositório no GitHub contendo um arquivo index.html e um arquivo app.js na mesma pasta, executados no navegador (com o Console aberto via F12).

O projeto deve apresentar:

Bloco 1 – Arrays e Métodos (map, filter, reduce, forEach):

Criação de um array nomes com 3 nomes. Uso do forEach para imprimir "Olá, NOME!" para cada nome e do map para criar um novo array com os nomes em maiúsculas (toUpperCase).

Criação de um array precos = [10, 25, 40, 5, 60]. Uso do filter para criar um array apenas com os preços acima de 20 e do reduce para somar todos os preços.

Criação de um array de objetos produtos (ex: { nome: "Caderno", preco: 15 }). Uso do map para extrair os nomes, filter para pegar os produtos com preço menor que 50, reduce para somar todos os preços e forEach para imprimir "Nome: R$ preço" de cada produto.

Bloco 2 – Manipulação do DOM (querySelector, createElement, classList):

Seleção do h1 (#titulo) com querySelector e alteração do seu texto para "Blog do [seu nome]".

Seleção de todos os parágrafos (.texto) com querySelectorAll e impressão do texto de cada um no console.

Seleção da #lista e uso do innerHTML para inserir 2 itens.

Criação de um <li> com createElement, definindo seu texto como "Terceiro item" e adicionando à #lista com append.

Uso do classList.add para aplicar a classe destaque nesse novo <li> e impressão do resultado de classList.contains("destaque") no console.

Criação de um array tarefas = ["Estudar JS", "Fazer exercícios", "Revisar DOM"]. Uso do forEach para criar um <li> para cada tarefa e adicionar à #lista. Aplicação da classe feito ao primeiro <li> e impressão da quantidade total de itens da lista com querySelectorAll("li").length.

Bloco 3 – Eventos e Event Delegation (addEventListener, submit, e.target):

Adição de um listener de click ao #botao que imprime "Clicou!" no console.

Adição de um listener de mouseover ao #botao que altera seu texto para "Pode clicar!".

Adição de um listener de keyup ao campo #nome que imprime o valor atual do campo no console a cada tecla solta.

Event Delegation: Adição de 3 <li> dentro da #lista no HTML. Adição de UM único listener de click na #lista (não um em cada <li>). Se o alvo do clique (e.target) for um LI, alternar a classe feito nele e imprimir o texto no console. Criação de um novo <li> via JavaScript e verificação de que o clique nele também funciona.

Formulário: Adição de um listener de submit ao #formulario. Uso do e.preventDefault() para evitar o recarregamento da página. Captura do texto do campo #tarefa (com .trim() para ignorar espaços vazios), criação de um <li>, adição à #lista e limpeza do campo. Se o campo estiver vazio, não adicionar nada.

Documento README.md: Breve descrição do projeto, explicando a função de cada método de array utilizado (map, filter, reduce), a lógica de manipulação do DOM e a importância do Event Delegation para otimizar a performance e permitir que elementos criados dinamicamente também recebam eventos.

Certifique-se de que o repositório esteja público ou com as permissões de acesso liberadas para visualização.

Objetivo da atividade

A construção desses scripts ajudará a equipe a dominar a manipulação de arrays em JavaScript, compreendendo na prática a diferença entre métodos que percorrem (forEach), transformam (map), filtram (filter) e acumulam (reduce). Além disso, a interação com o DOM permitirá criar páginas dinâmicas, alterando conteúdo, estilos e estruturas em tempo real. Por fim, o estudo de eventos (especialmente o Event Delegation) capacita a equipe a lidar com a interação do usuário de forma eficiente e escalável, preparando o terreno para aplicações web mais complexas.

💡 Dica: Lembrem-se de que map e filter sempre retornam um novo array, sem modificar o original. Já o reduce retorna um único valor (o acumulador). No DOM, usem textContent para inserir apenas texto (mais seguro) e innerHTML apenas quando precisarem interpretar tags HTML. Ao usar Event Delegation, o segredo é verificar e.target.tagName === "LI" para garantir que o clique foi no item certo. E nunca esqueçam do e.preventDefault() no submit do formulário para evitar que a página recarregue e perca os dados digitados. Testem tudo com o Console do navegador aberto (F12) para ver os resultados em tempo real.