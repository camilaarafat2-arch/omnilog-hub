

const request = require("supertest");
const app = require("../server");

describe("Testes do servidor OmniLog Hub", () => {

    test("A rota inicial deve responder com status 200", async () => {
        const resposta = await request(app).get("/");

        expect(resposta.status).toBe(200);
        expect(resposta.text).toContain("OmniLog Hub");
    });

    test("A rota de pedidos deve retornar uma lista", async () => {
        const resposta = await request(app).get("/pedidos");

        expect(resposta.status).toBe(200);
        expect(resposta.body.sucesso).toBe(true);
        expect(Array.isArray(resposta.body.pedidos)).toBe(true);
        expect(resposta.body.pedidos.length).toBeGreaterThan(0);

        const pedido = resposta.body.pedidos[0];

        expect(pedido).toHaveProperty("id_pedido");
        expect(pedido).toHaveProperty("id_cliente");
        expect(pedido).toHaveProperty("status");
        expect(pedido).toHaveProperty("valor_produtos");
    });

    test("A rota de cadastro deve rejeitar um pedido incompleto", async () => {
        const resposta = await request(app)
            .post("/pedidos")
            .send({});

        expect(resposta.status).toBe(400);
        expect(resposta.body.sucesso).toBe(false);
    });

});
