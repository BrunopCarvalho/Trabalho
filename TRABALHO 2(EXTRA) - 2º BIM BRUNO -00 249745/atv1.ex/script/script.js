let btExibir = document.querySelector("#btExibir");
let h3Resultado = document.querySelector("#h3Resultado");

function ordenar() {
  let valor1 = parseFloat(document.getElementById("valor1").value);
  let valor2 = parseFloat(document.getElementById("valor2").value);
  let valor3 = parseFloat(document.getElementById("valor3").value);
  let valor4 = parseFloat(document.getElementById("valor4").value);
  let valor5 = parseFloat(document.getElementById("valor5").value);

  let valores = [valor1, valor2, valor3, valor4, valor5];

  valores.sort(function(a, b) {
    return b - a;
  });

  h3Resultado.innerHTML = "Ordem decrescente: " + "<br>" + valores.join("<br>");
}
    

btExibir.onclick = function(){
    ordenar();
}