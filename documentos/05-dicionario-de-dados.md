
# OMNILOG HUB
## Dicionário de Dados
**Banco de dados:** omnilog_hub  
**SGBD:** MySQL  
**Versão do documento:** 1.0

## 1. Tabela: clientes
Armazena os dados dos clientes do portal.

| Campo | Tipo | Chave | Descrição |
|---|---|---|---|
| id_cliente | INT | PK | Identificador do cliente |
| nome | VARCHAR(120) | — | Nome completo |
| email | VARCHAR(150) | UNIQUE | E-mail do cliente |
| telefone | VARCHAR(20) | — | Telefone de contato |
| cpf | VARCHAR(14) | UNIQUE | CPF do cliente |
| data_cadastro | DATETIME | — | Data do cadastro |

## 2. Tabela: funcionarios
Armazena os funcionários da empresa.

| Campo | Tipo | Chave | Descrição |
|---|---|---|---|
| id_funcionario | INT | PK | Identificador do funcionário |
| nome | VARCHAR(120) | — | Nome completo |
| email | VARCHAR(150) | UNIQUE | E-mail corporativo |
| cargo | VARCHAR(60) | — | Cargo ocupado |
| ativo | BOOLEAN | — | Indica se está ativo |
| data_admissao | DATE | — | Data de admissão |

## 3. Tabela: usuarios
Armazena as contas de acesso ao sistema.

| Campo | Tipo | Chave | Descrição |
|---|---|---|---|
| id_usuario | INT | PK | Identificador da conta |
| id_cliente | INT | FK, UNIQUE | Cliente associado |
| id_funcionario | INT | FK, UNIQUE | Funcionário associado |
| email | VARCHAR(150) | UNIQUE | E-mail de acesso |
| senha_hash | VARCHAR(255) | — | Hash da senha |
| perfil | ENUM | — | Perfil de acesso |
| ativo | BOOLEAN | — | Situação da conta |

## 4. Tabela: categorias
Organiza os produtos por categoria.

| Campo | Tipo | Chave | Descrição |
|---|---|---|---|
| id_categoria | INT | PK | Identificador |
| nome | VARCHAR(80) | UNIQUE | Nome da categoria |
| descricao | VARCHAR(255) | — | Descrição da categoria |

## 5. Tabela: produtos
Armazena os produtos comercializados.

| Campo | Tipo | Chave | Descrição |
|---|---|---|---|
| id_produto | INT | PK | Identificador |
| id_categoria | INT | FK | Categoria do produto |
| nome | VARCHAR(150) | — | Nome do produto |
| descricao | TEXT | — | Detalhes do produto |
| sku | VARCHAR(50) | UNIQUE | Código único do produto |
| preco | DECIMAL(12,2) | — | Preço de venda |
| peso_kg | DECIMAL(10,3) | — | Peso em quilogramas |
| perigoso | BOOLEAN | — | Indica carga perigosa |
| ativo | BOOLEAN | — | Disponibilidade do produto |

## 6. Tabela: armazens
Registra os centros de distribuição.

| Campo | Tipo | Chave | Descrição |
|---|---|---|---|
| id_armazem | INT | PK | Identificador |
| nome | VARCHAR(120) | — | Nome do armazém |
| cidade | VARCHAR(100) | — | Cidade |
| estado | VARCHAR(2) | — | Sigla do estado |
| pais | VARCHAR(80) | — | País |
| capacidade_kg | DECIMAL(12,2) | — | Capacidade total em kg |
| ativo | BOOLEAN | — | Situação do armazém |

## 7. Tabela: posicoes_armazenagem
Define os locais físicos de armazenagem.

| Campo | Tipo | Chave | Descrição |
|---|---|---|---|
| id_posicao | INT | PK | Identificador da posição |
| id_armazem | INT | FK | Armazém associado |
| corredor | INT | — | Número do corredor |
| prateleira | INT | — | Número da prateleira |
| nivel | INT | — | Nível vertical |
| limite_peso_kg | DECIMAL(10,2) | — | Peso máximo permitido |
| permite_perigosos | BOOLEAN | — | Autoriza cargas perigosas |

## 8. Tabela: estoque
Controla as quantidades de produtos armazenados.

| Campo | Tipo | Chave | Descrição |
|---|---|---|---|
| id_estoque | INT | PK | Identificador |
| id_armazem | INT | FK | Armazém |
| id_produto | INT | FK | Produto |
| id_posicao | INT | FK | Posição de armazenagem |
| quantidade | INT | — | Quantidade disponível |
| atualizado_em | DATETIME | — | Última atualização |

## 9. Tabela: pedidos
Registra os pedidos realizados pelos clientes.

| Campo | Tipo | Chave | Descrição |
|---|---|---|---|
| id_pedido | INT | PK | Identificador |
| id_cliente | INT | FK | Cliente responsável |
| data_pedido | DATETIME | — | Data do pedido |
| status | ENUM | — | Situação do pedido |
| valor_produtos | DECIMAL(12,2) | — | Total dos produtos |
| valor_frete | DECIMAL(12,2) | — | Valor do frete |
| endereco_entrega | VARCHAR(255) | — | Endereço de entrega |

## 10. Tabela: itens_pedido
Registra os produtos de cada pedido.

| Campo | Tipo | Chave | Descrição |
|---|---|---|---|
| id_item | INT | PK | Identificador do item |
| id_pedido | INT | FK | Pedido relacionado |
| id_produto | INT | FK | Produto comprado |
| quantidade | INT | — | Quantidade solicitada |
| preco_unitario | DECIMAL(12,2) | — | Preço unitário na compra |

## 11. Tabela: pagamentos
Registra os pagamentos dos pedidos.

| Campo | Tipo | Chave | Descrição |
|---|---|---|---|
| id_pagamento | INT | PK | Identificador |
| id_pedido | INT | FK | Pedido relacionado |
| metodo | ENUM | — | PIX, cartão ou boleto |
| valor | DECIMAL(12,2) | — | Valor do pagamento |
| status | ENUM | — | Situação do pagamento |
| data_pagamento | DATETIME | — | Data do pagamento |
| referencia | VARCHAR(150) | — | Referência da transação |

## 12. Tabela: veiculos
Armazena os veículos da frota.

| Campo | Tipo | Chave | Descrição |
|---|---|---|---|
| id_veiculo | INT | PK | Identificador |
| placa | VARCHAR(10) | UNIQUE | Placa do veículo |
| tipo | VARCHAR(50) | — | Tipo de veículo |
| capacidade_kg | DECIMAL(12,2) | — | Capacidade de carga |
| custo_km | DECIMAL(10,2) | — | Custo estimado por km |
| ativo | BOOLEAN | — | Situação do veículo |

## 13. Tabela: motoristas
Armazena os dados dos motoristas.

| Campo | Tipo | Chave | Descrição |
|---|---|---|---|
| id_motorista | INT | PK | Identificador |
| nome | VARCHAR(120) | — | Nome do motorista |
| numero_habilitacao | VARCHAR(30) | UNIQUE | Número da habilitação |
| telefone | VARCHAR(20) | — | Telefone de contato |
| ativo | BOOLEAN | — | Situação do motorista |

## 14. Tabela: rotas
Armazena os trajetos entre armazéns.

| Campo | Tipo | Chave | Descrição |
|---|---|---|---|
| id_rota | INT | PK | Identificador |
| id_armazem_origem | INT | FK | Armazém de origem |
| id_armazem_destino | INT | FK | Armazém de destino |
| distancia_km | DECIMAL(10,2) | — | Distância em km |
| tempo_estimado_min | INT | — | Tempo estimado em minutos |
| custo_estimado | DECIMAL(12,2) | — | Custo previsto da rota |

## 15. Tabela: entregas
Controla o transporte e o rastreamento.

| Campo | Tipo | Chave | Descrição |
|---|---|---|---|
| id_entrega | INT | PK | Identificador |
| id_pedido | INT | FK | Pedido transportado |
| id_rota | INT | FK | Rota utilizada |
| id_veiculo | INT | FK | Veículo utilizado |
| id_motorista | INT | FK | Motorista responsável |
| codigo_rastreamento | VARCHAR(60) | UNIQUE | Código de rastreamento |
| status | ENUM | — | Situação da entrega |
| data_prevista | DATETIME | — | Previsão de entrega |
| data_entrega | DATETIME | — | Data efetiva da entrega |

## 16. Tabela: logs_auditoria
Registra operações relevantes realizadas no sistema.

| Campo | Tipo | Chave | Descrição |
|---|---|---|---|
| id_log | BIGINT | PK | Identificador do evento |
| id_usuario | INT | FK | Usuário relacionado |
| id_funcionario | INT | FK | Funcionário relacionado |
| acao | VARCHAR(100) | — | Operação executada |
| tabela_afetada | VARCHAR(100) | — | Tabela modificada |
| registro_id | VARCHAR(100) | — | Identificador do registro |
| detalhes | JSON | — | Informações adicionais |
| data_evento | DATETIME | — | Data e hora do evento |

## Legenda

- PK: chave primária.
- FK: chave estrangeira.
- UNIQUE: impede valores duplicados.
- ENUM: restringe os valores a opções definidas.
- NOT NULL: exige preenchimento.
- CHECK: valida uma condição.
