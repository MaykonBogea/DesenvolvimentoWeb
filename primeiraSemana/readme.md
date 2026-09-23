# 📌 Entregável de Desenvolvimento Web – Estrutura Base e Formulário de Inscrição – Semana 01

O que deve ser entregue?

Finalização da construção de um blog em HTML, integrando a estrutura semântica da página com a implementação de um formulário de inscrição. Todo o projeto deve ser consolidado em um único arquivo index.html.

O projeto deve apresentar:

Estrutura base com <!DOCTYPE html>, tag <html> com lang="pt-BR", <head> e <body>;

Uso correto de tags semânticas no <body>: <header> (contendo <h1> e um <nav> com 3 links), <main>, <aside> e <footer>;

Dentro do <main>, criação de 2 <article>, cada um contendo um <h2>, um <p> e uma <img>;

Adição de um <form> com method="get" dentro do <aside> do blog;

Campos obrigatórios no formulário: nome (com validação de mínimo 3 letras), e-mail (com type="email") e idade (com validação entre 18 e 120);

Criação de um <select> com 3 assuntos e um checkbox de "aceito os termos" (obrigatório);

Vinculação correta de cada campo com seu respectivo <label for="..."> e botão de envio;

Verificação da hierarquia de títulos no navegador e teste de envio do formulário para leitura dos dados na URL, incluindo o comportamento com campos vazios.

Certifique-se de que o arquivo esteja com as permissões de acesso liberadas para visualização.

Objetivo da atividade

A construção dessas etapas ajudará a equipe a dominar a estruturação semântica de páginas web e a criação de formulários HTML. Isso permite compreender como os dados são capturados, validados e enviados pelo navegador (método GET), servindo como base fundamental antes de avançar para estilizações com CSS e interações com JavaScript.

💡 Dica: utilizem a extensão Live Server no VS Code para visualizar as mudanças em tempo real. Para a parte de formulários, usem o painel Elements (DevTools) para inspecionar as propriedades do DOM (como value, validity e checked). Agrupem os campos do formulário com <fieldset> e <legend> para melhorar a semântica e acessibilidade. Validem todo o código no site validator.w3.org e corrijam os avisos.