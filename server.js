require("dotenv").config();
const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());
const conexao = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT || 3306),
    waitForConnections: true,
    connectionLimit: 10
});
app.get("/", (req, res) => {
    res.send("Servidor OmniLog Hub funcionando!");
});

app.get("/pedidos", async (req, res) => {
    try {
        const [pedidos] = await conexao.query(
            "SELECT * FROM pedidos LIMIT 100"
        );

        res.json({
            sucesso: true,
            pedidos: pedidos
        });
    } catch (erro) {
        console.error("Erro ao consultar pedidos:", erro.message);

        res.status(500).json({
            sucesso: false,
            mensagem: "Não foi possível consultar os pedidos."
        });
    }
});
async function iniciarServidor() {
    try {
        const connection = await conexao.getConnection();
        await connection.ping();
        connection.release();

        app.listen(3000, () => {
            console.log("OmniLog Hub rodando em http://localhost:3000");
            console.log("MySQL conectado com sucesso!");
        });
    } catch (erro) {
        console.error("Erro ao conectar ao MySQL:", erro.message);
        await conexao.end();
    }
}

if (require.main === module) {
    iniciarServidor();
}

module.exports = app;