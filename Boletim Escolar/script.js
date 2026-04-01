let boletimVisivel = false;

        function mostrar(texto) {
            document.getElementById("saida").innerHTML += texto + "<br>";
        }

        function limpar() {
            document.getElementById("saida").innerHTML = "";
        }

        function gerarBoletim() {

            if (boletimVisivel) {
                limpar();
                boletimVisivel = false;
                return;
            }

            limpar();

            let alunos = [
                [7, 8, 6],
                [5, 5, 5],
                [9, 9, 9],
                [6, 7, 6]
            ];

            let totalAprovados = 0;
            let maiorMedia = 0;
            let menorMedia = 10;

            for (let i = 0; i < alunos.length; i++) {

                let soma = 0;
                let j = 0;

                while (j < alunos[i].length) {
                    soma += alunos[i][j];
                    j++;
                }

                let media = soma / alunos[i].length;
                let resultado = "";

                if (media >= 9) {
                    resultado = "Excelente";
                } else if (media >= 7) {
                    resultado = "Bom";
                } else if (media >= 6) {
                    resultado = "Aprovado";
                } else {
                    resultado = "Reprovado";
                }

                if (media >= 6) totalAprovados++;

                if (media > maiorMedia) maiorMedia = media;
                if (media < menorMedia) menorMedia = media;

                mostrar("Aluno " + (i + 1) + ": Média " + media.toFixed(1) + " → " + resultado);
            }

            mostrar("<br>📊 Total de aprovados: " + totalAprovados);
            mostrar("📈 Maior média: " + maiorMedia.toFixed(1));
            mostrar("📉 Menor média: " + menorMedia.toFixed(1));

            boletimVisivel = true;
        }

        function toggleRegras() {
            let tabela = document.getElementById("tabelaRegras");

            let displayAtual = window.getComputedStyle(tabela).display;

            if (displayAtual === "none") {
                tabela.style.display = "block";
            } else {
                tabela.style.display = "none";
            }
        }