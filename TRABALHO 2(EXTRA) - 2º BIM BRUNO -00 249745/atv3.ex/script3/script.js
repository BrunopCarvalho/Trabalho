let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");
let inputvalorLidovalorLido = document.querySelector("#inputvalorLido");
function calcularNotas(){

        let valorLido = parseInt(document.getElementById("inputvalorLido").value);
        let nt100 = parseInt(document.getElementById("inputvalorLido").value);
        let nt50 =  parseInt(document.getElementById("inputvalorLido").value);
        let nt10 =  parseInt(document.getElementById("inputvalorLido").value);
        let nt5 =  parseInt(document.getElementById("inputvalorLido").value);
        let nt1 =  parseInt(document.getElementById("inputvalorLido").value);

       h3Resultado.innerHTML = "Valor lido: R$" + valorLido.toFixed(2) + "<br><br>";
       h3Resultado.innerHTML += "Dos R$" + valorLido + " em notas de 100 ficam: R$" + Math.floor(nt100 / 100) + "<br>";
       h3Resultado.innerHTML += "Dos R$" + valorLido + " em notas de 50 ficam: R$" + Math.floor(nt50 % 100 / 50) + "<br>";
       h3Resultado.innerHTML += "Dos R$" + valorLido + " em notas de 10 ficam: R$" + Math.floor(nt10 % 100 % 50 / 10) + "<br>";
       h3Resultado.innerHTML += "Dos R$" + valorLido + " em notas de 5 ficam: R$" + Math.floor(nt5 % 100 % 50 % 10 / 5) + "<br>";
       h3Resultado.innerHTML += "Dos R$" + valorLido + " em moedas de 1 ficam: R$" + Math.floor(nt1 % 100 % 50 % 10 % 5 / 1) + "<br>";
       
    }
btCalcular.onclick = function(){
    calcularNotas();
}
