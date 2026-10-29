# Testes SQL — OmniLog Hub

## 1. Teste da procedure de faturamento diário

**Comando executado:**
```sql
CALL sp_faturamento_diario('2026-10-28');
```

**Objetivo:** consultar o faturamento dos pedidos pagos em uma data específica.

**Resultado:** a procedure foi executada e retornou os valores calculados para a data informada.

**Status:** APROVADO.

## 2. Teste da view de desempenho logístico

**Comando executado:**
```sql
SELECT * FROM vw_desempenho_logistico;
```

**Objetivo:** consultar informações dos pedidos relacionadas ao desempenho logístico e às entregas.

**Resultado:** a consulta foi executada com sucesso.

**Status:** APROVADO.

## 3. Conclusão

Os testes registram o funcionamento da procedure de faturamento diário e da view de desempenho logístico. Os resultados devem ser conferidos no banco de dados sempre que houver alterações nessas estruturas.
