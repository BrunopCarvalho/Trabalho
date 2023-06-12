document.getElementById("btnCalcular").addEventListener("click", function(event) {
    event.preventDefault();
    var nivel = parseInt(document.getElementById("selectNivel").value);
    var horasAula = parseInt(document.getElementById("inputHorasAula").value);
    var valorHoraAula = 0;
    var salario = 0;
    
    switch (nivel) {
      case 1:
        valorHoraAula = 12;
        break;
        
      case 2:
        valorHoraAula = 17;
        break;

      case 3:
        valorHoraAula = 25;
        break;

      default:
        valorHoraAula = 0;
        break;
    }
    
    salario = valorHoraAula * horasAula * 4.5;
    
    document.getElementById("resultado").textContent = "Salário: R$ " + salario.toFixed(2);
  });