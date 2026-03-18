const PRECO_PRODUTO = 50;
const TAXA_ENTREGA = 10;
const DESCONTO = 20;
const LIMITE_DESCONTO = 200;

function calcularCompra() {
let nome = document.getElementById("cliente").value;
let quantidade = Number(document.getElementById("quantidade").value);
let resultado = document.getElementById("resultado");

// Validação
if (nome === "" || quantidade <= 0) {
resultado.innerHTML = "Preencha os dados corretamente!";
return;
}

let valorProdutos = quantidade * PRECO_PRODUTO;
let descontoAplicado = 0;

if (valorProdutos > LIMITE_DESCONTO) {
descontoAplicado = DESCONTO;
}

let total = valorProdutos + TAXA_ENTREGA - descontoAplicado;

resultado.innerHTML = `
Cliente: ${nome} <br>
Valor dos produtos: R$ ${valorProdutos.toFixed(2)} <br>
Taxa de entrega: R$ ${TAXA_ENTREGA.toFixed(2)} <br>
Desconto: R$ ${descontoAplicado.toFixed(2)} <br>
<strong>Total: R$ ${total.toFixed(2)}</strong>
`;
}