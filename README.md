# OmniLog Hub

## Sobre o projeto

O OmniLog Hub é um sistema de gerenciamento logístico desenvolvido para integrar informações de pedidos, clientes e entregas, facilitando o acompanhamento das operações.

## Tecnologias utilizadas

- Node.js
- Express
- MySQL
- HTML
- CSS
- JavaScript
- Jest e Supertest para testes automatizados
- Git e GitHub para controle de versão

## Funcionalidades

- Consulta de pedidos pela API.
- Integração com banco de dados MySQL.
- Procedure para consulta de faturamento diário.
- View para análise de desempenho logístico.
- Testes automatizados das rotas do servidor.

## Requisitos

- Node.js e npm instalados.
- MySQL instalado e em execução.
- Banco de dados `omnilog_hub` criado e configurado.

## Como executar

1. Clone o repositório.
2. Instale as dependências:

   `npm install`

3. Crie um arquivo `.env` na pasta principal e configure as variáveis:

   ```env
   DB_HOST=localhost
   DB_USER=seu_usuario
   DB_PASSWORD=sua_senha
   DB_NAME=omnilog_hub
   DB_PORT=3306
   ```

4. Inicie o servidor:

   `npm start`

5. Acesse `http://localhost:3000/`.

## Rotas da API

- `GET /` — verifica o funcionamento do servidor.
- `GET /pedidos` — consulta os pedidos cadastrados.

## Testes automatizados

Execute:

`npm test`

Os testes verificam a resposta da rota inicial e a estrutura dos dados retornados pela rota de pedidos.

## Estrutura do projeto

- `documentos/` — documentação e scripts SQL.
- `testes/` — testes automatizados.
- `server.js` — servidor e API.
- `index.html`, `style.css` e `script.js` — interface web.
- `package.json` — dependências e comandos do projeto.

## Segurança

As credenciais do banco de dados devem ficar no arquivo `.env`, que não deve ser enviado ao GitHub.

## Equipe

Projeto acadêmico de desenvolvimento de sistemas.
