 function calcularFrete() {
    let valor = Number(document.getElementById("valor").value);
    let frete;

    if (valor < 100) {
      frete = 15;
    } else if (valor < 200) {
      frete = 10;
    } else {
      frete = 0;
    }
    document.getElementById("resultado").innerHTML = `Frete: R$ ${frete.toFixed(2)}`;
  }