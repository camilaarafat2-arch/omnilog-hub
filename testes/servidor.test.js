
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
    });

});
