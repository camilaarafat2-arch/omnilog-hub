
function mostrarMensagem(secao) {
    document.getElementById("mensagem").textContent =
        "Seção selecionada: " + secao;
}

async function carregarPedidos() {
    const lista = document.getElementById("listaPedidos");

    try {
        const resposta = await fetch("http://localhost:3000/pedidos");
        const dados = await resposta.json();

        if (!resposta.ok || !dados.sucesso) {
            throw new Error("Não foi possível carregar os pedidos.");
        }

        if (dados.pedidos.length === 0) {
            lista.textContent = "Nenhum pedido cadastrado.";
            return;
        }

        lista.innerHTML = dados.pedidos.map(pedido => `
            <article class="card pedido">
                <h3>Pedido #${pedido.id_pedido}</h3>
                <p><strong>Cliente:</strong> ${pedido.id_cliente}</p>
                <p><strong>Status:</strong> ${pedido.status}</p>
                <p><strong>Produtos:</strong> R$ ${Number(pedido.valor_produtos).toFixed(2)}</p>
                <p><strong>Frete:</strong> R$ ${Number(pedido.valor_frete).toFixed(2)}</p>
            </article>
        `).join("");
    } catch (erro) {
        lista.textContent = "Erro ao carregar os pedidos. Verifique o servidor.";
        console.error(erro);
    }
}

carregarPedidos();
