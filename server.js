
require("dotenv").config();

const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Conexão com o banco de dados
const conexao = mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || "omnilog_hub",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Rota inicial
app.get("/", (req, res) => {
    res.send("Servidor OmniLog Hub funcionando!");
});

// Consultar pedidos
app.get("/pedidos", async (req, res) => {
    try {
        const [pedidos] = await conexao.execute(
            `SELECT
                id_pedido,
                id_cliente,
                data_pedido,
                status,
                valor_produtos,
                valor_frete,
                endereco_entrega
             FROM pedidos
             ORDER BY id_pedido`
        );

        return res.status(200).json({
            sucesso: true,
            pedidos
        });
    } catch (erro) {
        console.error("Erro ao consultar pedidos:", erro.message);

        return res.status(500).json({
            sucesso: false,
            mensagem: "Não foi possível consultar os pedidos."
        });
    }
});

// Cadastrar um pedido
app.post("/pedidos", async (req, res) => {
    try {
        const {
            id_cliente,
            status,
            valor_produtos,
            valor_frete,
            endereco_entrega
        } = req.body;

        if (
            id_cliente == null ||
            !Number.isInteger(Number(id_cliente)) ||
            Number(id_cliente) <= 0 ||
            !status ||
            valor_produtos == null ||
            valor_frete == null ||
            !endereco_entrega ||
            String(endereco_entrega).trim() === ""
        ) {
            return res.status(400).json({
                sucesso: false,
                mensagem: "Preencha corretamente todos os campos do pedido."
            });
        }

        if (
            !Number.isFinite(Number(valor_produtos)) ||
            Number(valor_produtos) < 0 ||
            !Number.isFinite(Number(valor_frete)) ||
            Number(valor_frete) < 0
        ) {
            return res.status(400).json({
                sucesso: false,
                mensagem: "Os valores dos produtos e do frete devem ser números não negativos."
            });
        }

        const [resultado] = await conexao.execute(
            `INSERT INTO pedidos (
                id_cliente,
                data_pedido,
                status,
                valor_produtos,
                valor_frete,
                endereco_entrega
            ) VALUES (?, NOW(), ?, ?, ?, ?)`,
            [
                Number(id_cliente),
                String(status).trim(),
                Number(valor_produtos),
                Number(valor_frete),
                String(endereco_entrega).trim()
            ]
        );

        return res.status(201).json({
            sucesso: true,
            mensagem: "Pedido cadastrado com sucesso!",
            id_pedido: resultado.insertId
        });
    } catch (erro) {
        console.error("Erro ao cadastrar pedido:", erro.message);

        return res.status(500).json({
            sucesso: false,
            mensagem: "Não foi possível cadastrar o pedido."
        });
    }
});

// Iniciar o servidor
async function iniciarServidor() {
    try {
        await conexao.query("SELECT 1");

        console.log("MySQL conectado com sucesso!");

        const PORTA = process.env.PORT || 3000;

        app.listen(PORTA, () => {
            console.log(`OmniLog Hub rodando em http://localhost:${PORTA}`);
        });
    } catch (erro) {
        console.error("Erro ao conectar ao MySQL:", erro.message);
        process.exitCode = 1;
    }
}

// Inicia o servidor apenas quando este arquivo é executado diretamente
if (require.main === module) {
    iniciarServidor();
}

// Permite utilizar o servidor nos testes automatizados
module.exports = app;
