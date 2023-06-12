document.getElementById("btnVerificar").addEventListener("click", function(event) {
    event.preventDefault();
    
    
    
   
  var x = parseFloat(document.getElementById("inputX").value);
    
   
  var y = parseFloat(document.getElementById("inputY").value);
    
   
  var z = parseFloat(document.getElementById("inputZ").value);
    
    if (x + y > z && x + z > y && y + z > x) {
      if (x === y && y === z) {
        document.getElementById("resultado").textContent = "É um triângulo equilátero.";
      } else if (x === y || x === z || y === z) {
        document.getElementById("resultado").textContent = "É um triângulo isósceles.";
      } else {
        document.getElementById("resultado").textContent = "É um triângulo escaleno.";
      }
    } else {
      document.getElementById("resultado").textContent = "Não é possível formar um triângulo.";
    }
  });