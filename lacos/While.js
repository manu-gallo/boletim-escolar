let notas = [10, 9, 8, 7];
let soma = 0;
let i = 0;

while (i < notas.length) {
    soma += notas[i];
    i++;
}   

let media = soma / notas.length;

console.log("A média é:" + media);

