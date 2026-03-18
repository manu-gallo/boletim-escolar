let nomeAluno = prompt("Digite o nome do aluno:");
let nota1 = Number(prompt("Digite a nota 1:"));
let nota2 = Number(prompt("Digite a nota 2:"));
let nota3 = Number(prompt("Digite a nota 3:"));

let media;
let resultado;

media = (nota1 + nota2 + nota3) / 3;

if (media >= 9) {
    resultado = "Excelente";
} else if (media >= 7) {
    resultado = "Bom";
} else if (media >= 6) {
    resultado = "Aprovado";
} else {
    resultado = "Reprovado";
}

console.log("Aluno:", nomeAluno);
console.log("Nota 1:", nota1);
console.log("Nota 2:", nota2);
console.log("Nota 3:", nota3);
console.log("Média final:", media);
console.log("Classificação:", resultado);