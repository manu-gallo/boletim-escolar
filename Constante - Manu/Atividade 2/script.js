let nomeJogador = prompt("Digite o nome do jogador:");
const VELOCIDADE_INICIAL = 10;

let posicao = 0;

// Mostrando dados na tela
document.getElementById("nome").innerText = "Jogador: " + nomeJogador;
document.getElementById("velocidade").innerText = "Velocidade: " + VELOCIDADE_INICIAL;

// Função para mover personagem
function mover() {
posicao += VELOCIDADE_INICIAL;

document.getElementById("posicao").innerText = "Posição: " + posicao;

console.log("Jogador:", nomeJogador);
console.log("Velocidade:", VELOCIDADE_INICIAL);
console.log("Posição atual:", posicao);
}