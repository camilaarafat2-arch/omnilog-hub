
const request = require("supertest");
const app = require("../server");

describe("Testes do servidor OmniLog Hub", () => {
    test("A rota inicial deve responder com status 200", async () => {
        const resposta = await request(app).get("/");

        expect(resposta.status).toBe(200);
        expect(resposta.text).toContain("OmniLog Hub");
    });
});
