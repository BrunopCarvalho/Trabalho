document.getElementById("btnCalcular").addEventListener("click", function(event) {
    event.preventDefault();
    var ano = parseInt(document.getElementById("inputAno").value);
    var valor = parseFloat(document.getElementById("inputValor").value);
    var imposto = 0;

  if (ano < 1990) {
    imposto = valor * 0.010;} else 
    {imposto = valor *0.015;}

  document.getElementById("resultado").textContent = "Imposto a ser pago: R$ " + imposto.toFixed(2);
  });