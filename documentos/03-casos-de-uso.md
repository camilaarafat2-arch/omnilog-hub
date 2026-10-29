
# Casos de Uso — OMNILOG HUB

## UC01 — Realizar compra

**Ator:** Cliente

**Pré-condição:** O cliente acessou o portal.

**Fluxo principal:**
1. O cliente consulta os produtos.
2. Seleciona os produtos desejados.
3. Informa os dados necessários para a entrega.
4. O sistema verifica a disponibilidade do estoque.
5. O sistema calcula o frete.
6. O cliente confirma o pedido.
7. O sistema registra o pedido e apresenta sua identificação.

**Fluxo alternativo:**
- Se um produto estiver indisponível, o sistema informa
  a indisponibilidade e permite alterar o pedido.

**Exceções:**
- Se ocorrer falha no banco de dados, o sistema informa
  que não foi possível concluir a operação.
- O pedido não deve ser confirmado sem validação de estoque.

## UC02 — Movimentar estoque

**Ator:** Operador de armazém

**Pré-condição:** O operador está autenticado e autorizado.

**Fluxo principal:**
1. O operador localiza o produto.
2. Informa o tipo e a quantidade da movimentação.
3. O sistema valida os dados.
4. O sistema registra a movimentação.
5. O sistema atualiza o saldo do estoque.

**Exceções:**
- Quantidades inválidas devem ser rejeitadas.
- Uma saída não pode ultrapassar o saldo disponível.

## UC03 — Acompanhar entrega

**Ator:** Cliente

**Pré-condição:** Existe um pedido associado ao cliente.

**Fluxo principal:**
1. O cliente acessa seus pedidos.
2. Seleciona o pedido desejado.
3. O sistema consulta os eventos de rastreamento.
4. O sistema apresenta o status e a última atualização.

**Fluxo alternativo:**
- Se não houver novos eventos, o sistema apresenta
  a última atualização registrada.

## UC04 — Gerenciar operações logísticas

**Ator:** Gerente logístico

**Fluxo principal:**
1. O gerente acessa o painel logístico.
2. Consulta pedidos e entregas.
3. Analisa rotas, custos e indicadores.
4. Identifica atrasos e problemas operacionais.

## UC05 — Administrar usuários

**Ator:** Administrador do sistema

**Fluxo principal:**
1. O administrador acessa a área administrativa.
2. Cadastra ou atualiza um usuário.
3. Define o perfil e as permissões.
4. O sistema valida os dados e registra a operação.
