# Relatório de Testes — OmniLog Hub

## 1. Teste do servidor
- **Objetivo:** verificar se o servidor está funcionando.
- **Rota:** `GET /`
- **Resultado esperado:** mensagem de funcionamento do servidor.
- **Resultado obtido:** Servidor OmniLog Hub funcionando!
- **Status:** APROVADO.

## 2. Teste da rota de pedidos
- **Objetivo:** verificar a consulta de pedidos no banco de dados.
- **Rota:** `GET /pedidos`
- **Resultado esperado:** retornar os pedidos em formato JSON.
- **Resultado obtido:** dois pedidos retornados com sucesso.
- **Status:** APROVADO.

## 3. Conclusão
Os testes realizados confirmaram que o servidor está funcionando e que a rota de pedidos consegue retornar dados do banco de dados MySQL.
