let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");
let inputPreco = document.querySelector("#inputPreco");

function calcular() {
    var preco = parseFloat(document.getElementById("inputPreco").value);
    var condicao = document.getElementById("condicao").value;
    var valorPago;
    
    if (condicao === "a") {
        valorPago = preco * 0.9; // 10% de desconto
    } else if (condicao === "b") {
        valorPago = preco * 0.85; // 15% de desconto
    } else if (condicao === "c") {
        valorPago = preco; // sem juros
    } else if (condicao === "d") {
        valorPago = preco * 1.1; // 10% de juros
    }
    
    h3Resultado.innerHTML = "Valor a ser pago: R$" + valorPago.toFixed(2);
}

btCalcular.onclick = function(){
    calcular()
}
