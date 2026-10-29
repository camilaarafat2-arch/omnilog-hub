
# Requisitos do Sistema — OMNILOG HUB

## 1. Requisitos Funcionais

| Código | Descrição |
|---|---|
| RF01 | O sistema deve permitir o cadastro de clientes. |
| RF02 | O sistema deve permitir autenticação de usuários. |
| RF03 | O administrador deve gerenciar funcionários e permissões. |
| RF04 | O sistema deve permitir cadastrar produtos e categorias. |
| RF05 | O sistema deve consultar e atualizar o estoque. |
| RF06 | O operador deve registrar movimentações de estoque. |
| RF07 | O sistema deve registrar pedidos de clientes. |
| RF08 | O sistema deve registrar e consultar pagamentos. |
| RF09 | O sistema deve calcular rotas e custos de entrega. |
| RF10 | O gerente deve acompanhar as entregas. |
| RF11 | O cliente deve consultar o rastreamento do pedido. |
| RF12 | O sistema deve registrar eventos importantes em logs de auditoria. |
| RF13 | O sistema deve gerar relatórios de vendas e logística. |
| RF14 | O sistema deve validar a disponibilidade de produtos antes da venda. |
| RF15 | O sistema deve permitir consultar o histórico de pedidos. |

## 2. Requisitos Não Funcionais

| Código | Descrição |
|---|---|
| RNF01 | As senhas devem ser armazenadas com hash seguro. |
| RNF02 | O sistema deve aplicar controles de acesso por perfil. |
| RNF03 | Dados pessoais devem ser tratados conforme a LGPD. |
| RNF04 | Consultas comuns devem responder em até 2 segundos em condições de teste definidas. |
| RNF05 | O portal deve se adaptar a computadores e dispositivos móveis. |
| RNF06 | Formulários devem possuir validação e mensagens de erro claras. |
| RNF07 | Entradas devem ser validadas para reduzir riscos de SQL Injection e XSS. |
| RNF08 | O sistema deve possuir procedimentos documentados de backup e restauração. |
| RNF09 | O código deve ser versionado com Git. |
| RNF10 | O sistema deve possuir testes documentados e reproduzíveis. |

## 3. Observações

Os tempos de resposta são metas iniciais e devem ser
validados em testes com ambiente, volume de dados e
carga documentados.

A autenticação, as permissões e a proteção dos dados
devem ser implementadas no servidor, não apenas na interface.
