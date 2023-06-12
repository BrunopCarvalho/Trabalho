let inputQuantidade = document.querySelector("#inputQuantidade");
let btExibir = document.querySelector("#btExibir");
let h3resultado = document.querySelector("#h3resultado");

        function calcularValor() {
            // Obter os valores selecionados pelo usuário
            let codigo = document.getElementById("codigo").value;
            let quantidade = document.getElementById("inputQuantidade").value;

            // Definir os preços dos itens
            let precos = {
                "100": 11.00,
                "200": 8.50,
                "300": 8.00,
                "400": 9.00,
                "500": 10.00,
                "600": 4.50
            };

            // Calcular o valor total
            let valorTotal = precos[codigo] * quantidade;

    
            h3resultado.innerHTML = "Valor a ser pago: R$ " + valorTotal.toFixed(2);
        }

        btExibir.onclick = function(){
            calcularValor();
        }