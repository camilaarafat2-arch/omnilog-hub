
USE omnilog_hub;

CREATE OR REPLACE VIEW vw_desempenho_logistico AS
SELECT
    e.id_entrega,
    e.codigo_rastreamento,
    p.id_pedido,
    c.nome AS cliente,
    p.data_pedido,
    p.status AS status_pedido,
    e.status AS status_entrega,
    e.data_prevista,
    e.data_entrega,

    CASE
        WHEN e.data_entrega IS NULL THEN 'EM ANDAMENTO'
        WHEN e.data_entrega <= e.data_prevista THEN 'NO PRAZO'
        ELSE 'ATRASADA'
    END AS desempenho_prazo,

    r.distancia_km,
    v.placa AS placa_veiculo,
    v.tipo AS tipo_veiculo,
    m.nome AS motorista,
    p.valor_produtos,
    p.valor_frete,
    (p.valor_produtos + p.valor_frete)
        AS valor_total_pedido

FROM entregas e

INNER JOIN pedidos p
    ON e.id_pedido = p.id_pedido

INNER JOIN clientes c
    ON p.id_cliente = c.id_cliente

LEFT JOIN rotas r
    ON e.id_rota = r.id_rota

LEFT JOIN veiculos v
    ON e.id_veiculo = v.id_veiculo

LEFT JOIN motoristas m
    ON e.id_motorista = m.id_motorista;
