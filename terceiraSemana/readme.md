# 📌 Entregável de Desenvolvimento Web –  Introdução ao JavaScript – Semana 03

O que deve ser entregue?

Finalização da resolução dos desafios práticos propostos na aula de Introdução ao JavaScript, cobrindo os três blocos fundamentais: Variáveis e Tipos, Funções e Controle de Fluxo. Os códigos devem ser entregues em arquivos .js (ou um único arquivo app.js) e devem ser executados no console do navegador ou via Node.js.

O projeto deve apresentar:

Bloco 1 – Fundamentos e Variáveis:

Declaração de uma variável let pontos com valor inicial, adição de 10 a ela na linha seguinte e exibição no console.

Declaração de uma constante MAX_PONTOS com valor 100 e tentativa de reatribuição, demonstrando o erro (TypeError) gerado e explicando o motivo.

Criação de uma variável para cada tipo primitivo (string, number, boolean, undefined, null) e uso do operador typeof em cada uma.

Construção de uma frase utilizando Template Literals (crase e ${}) com pelo menos duas variáveis, e a mesma frase utilizando concatenação com + para comparação.

Bloco 2 – Funções:

Criação da função ehMaiorDeIdade (retornando true ou false) no formato de função declarada, chamando-a antes da declaração para demonstrar o hoisting.

Criação da mesma lógica como função de expressão (const ehMaiorDeIdadeExpressao = function...), tentando chamá-la antes da declaração para observar o ReferenceError.

Criação da função dobro em suas três formas: declarada, expressão e arrow function (forma curta).

Criação de uma variação da função dobro (ou outra função de sua escolha) utilizando um parâmetro com valor padrão (ex: n = 1) e testando a chamada sem argumentos.

Bloco 3 – Controle de Fluxo:

Criação da função classificarNota(nota) usando if/else (Aprovado se >= 6, Reprovado caso contrário).

Criação de uma variável corSemaforo e uso da estrutura switch para imprimir "Pare", "Atenção" ou "Siga".

Impressão da tabuada do 5 (de 1 a 10) utilizando um laço for clássico.

Impressão de uma contagem regressiva de 5 até 1 utilizando um laço while.

Impressão dos números de 1 a 20, indicando se cada um é "par" ou "ímpar" (usando % 2 === 0), tanto com for quanto com while.

Criação de uma função diaDaSemana(numero) que recebe um número de 1 a 7 e retorna o nome do dia correspondente usando switch, com um default para números inválidos.

Certifique-se de que todos os códigos rodam sem erros e utilizam as práticas modernas do ES6+ apresentadas em aula.

Objetivo da atividade

A construção desses scripts ajudará a equipe a consolidar os fundamentos da linguagem JavaScript, compreendendo na prática a diferença entre as declarações de variáveis (var, let, const), as particularidades do hoisting nas diferentes formas de declarar funções, e o uso de Template Literals para formatação de strings. Além disso, a resolução dos desafios de controle de fluxo desenvolve o raciocínio lógico para tomada de decisões e repetição de tarefas, estabelecendo a base necessária antes de avançar para manipulação de arrays, DOM e eventos.

💡 Dica: Lembrem-se da regra prática para variáveis: usem const por padrão e só troquem para let quando souberem que o valor será reatribuído. Evitem o uso de var. Fiquem atentos ao erro clássico do JavaScript: typeof null retorna "object", o que é um bug histórico da linguagem. Ao testar o hoisting, observem que as funções declaradas são "içadas" para o topo do escopo, enquanto as funções de expressão e arrow functions não. Por fim, certifiquem-se de que todo laço while possua uma condição de parada clara para evitar loops infinitos.