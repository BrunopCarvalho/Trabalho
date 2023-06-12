let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");
let inputCargo = document.querySelector("#inputCargo");

    function calcularNovoSalario(){
      var salario = parseFloat(document.getElementById("salario").value);
      var cargo = document.getElementById("cargo").value;
      var novoSalario = 0;

      if (cargo === "gerente") {
        novoSalario = salario * 1.1;
      } else if (cargo === "engenheiro") {
        novoSalario = salario * 1.2;
      } else if (cargo === "tecnico") {
        novoSalario = salario * 1.3;
      } else {
        novoSalario = salario * 1.4;
      }

      var diferenca = novoSalario - salario;

      h3Resultado.innerHTML = "Salário antigo: R$ " + salario.toFixed(2) + "<br>" +
      "Novo salário: R$ " + novoSalario.toFixed(2) + "<br>" +
      "Diferença: R$ " + diferenca.toFixed(2);
      
}

btCalcular.onclick = function(){
    calcularNovoSalario();
}