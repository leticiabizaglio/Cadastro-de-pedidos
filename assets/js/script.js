console.log("O JS está linkado!");
class Pedido {
    constructor(cliente, mesa, descricao) {
        this.id = this.gerarId();
        this.cliente = cliente;
        this.mesa = mesa;
        this.descricao = descricao;
    }
    gerarId() {
        return Math.floor(Math.random() * 1000)
    }
}

class ListaPedidos {
    constructor() {
        this.comprinhas = [];
    }

    adicionarPedido(parametro) {
        this.comprinhas.push(parametro);
    }

    listarProduto() {
        return this.comprinhas;
    }

    listarProdutoPorId(parametro) {
        return this.comprinhas.find((pedido) => pedido.id == parametro);
    }

    atualizarPedido(id, cliente, mesa, descricao) {
        const pedido = this. listarProdutoPorId(id);

        pedido.cliente = cliente;
        pedido.mesa = mesa;
        pedido.descricao = descricao;
    }
    deletarProduto(parametro) {
        return (this.comprinhas = this.comprinhas.filter((pedir) => pedir.id != parametro));
    }
}

const pedidinhos = new ListaPedidos();

function CadastrarProduto() {
    const cliente = document.getElementById("cliente").value;
    const mesa = Number(document.getElementById("mesa").value);
    const descricao = document.getElementById("descricao").value;

    const novaProduto = new Pedido(cliente, mesa, descricao);
    pedidinhos.adicionarPedido(novaProduto);
    listarProduto();
    limparInputs();

}

function listarProduto() {
    const comprinhas = pedidinhos.listarProduto();

    const elementoLista = document.getElementById("mostrar-lateral");
    elementoLista.innerHTML = "";

    let content = "";

    comprinhas.forEach((pedido) => {
        content += `
        <div id="td">
        <p>ID:  ${pedido.id}</p>
        <p>Cliente: ${pedido.cliente}</p>
        <p>Mesa: ${pedido.mesa}</p>
        <p>Descrição: ${pedido.descricao}</p>
        <button onclick="atualizarPedido(${pedido.id})">Editar</button>
        <button onclick="deletarProduto(${pedido.id})">Deletar</button>
        </div>
        `
    });
    elementoLista.innerHTML = content;

}

let aux = null;

function atualizarPedido(id) {
    const pedido = pedidinhos.listarProdutoPorId(id);

    document.getElementById("cliente").value = pedido.cliente;
    document.getElementById("mesa").value = pedido.mesa;
    document.getElementById("descricao").value = pedido.descircao;

    document.getElementById("botaoCadastrar").classList.add("hidden");
    document.getElementById("botaoEditar").classList.remove("hidden");

    aux = id;
}

function editarEquipe() {
    const cliente = document.getElementById("cliente").value;
    const mesa = document.getElementById("mesa").value;
    const descricao = document.getElementById("descricao").value;

    pedidinhos.atualizarPedido(aux, cliente, mesa, descricao);
    listarProduto();

    document.getElementById("botaoCadastrar").classList.remove("hidden");
    document.getElementById("botaoEditar").classList.add("hidden");


    aux = null;
    limparInputs();
}

function limparInputs() {
    document.getElementById("cliente").value = "";
    document.getElementById("mesa").value = "";
    document.getElementById("descricao").value = "";
}

function deletarProduto(id) {
    pedidinhos.deletarProduto(id);
    listarProduto();
    document.getElementById("mostrar-lateral").classList.add("hidden");
}