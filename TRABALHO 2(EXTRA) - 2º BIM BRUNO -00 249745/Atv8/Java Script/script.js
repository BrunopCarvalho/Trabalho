document.getElementById("btnCalcular").addEventListener("click", function(event) {
    event.preventDefault();
    var altura = parseFloat(document.getElementById("inputAltura").value);
    var sexo = document.getElementById("selectSexo").value;
    var pesoIdeal = 0;
    
    if (sexo === "M") {
    pesoIdeal = (72.7 * altura) - 58;} else if 
    (sexo === "F") {
    pesoIdeal = (62.1 * altura) - 44.7;
    }
  document.getElementById("resultado").textContent = "Peso Ideal: " + pesoIdeal.toFixed(2) + " kg";});
  