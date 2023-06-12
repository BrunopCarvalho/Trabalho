document.getElementById("btnCalcular").addEventListener("click", function(event) {
    event.preventDefault();
    var saldo = parseFloat(document.getElementById("inputSaldo").value);
    var credito = 0;
    
    if (saldo <= 200) {
      credito =  0;
    } else if 
    (saldo <= 400) {
    credito = saldo * 0.2;
    } else if 
    (saldo <= 600) {credito = saldo * 0.3;} 
    else{
    credito = saldo * 0.4;}
    
  document.getElementById("resultado").textContent = "Valor do Crédito: R$ " + credito.toFixed(2);
  });