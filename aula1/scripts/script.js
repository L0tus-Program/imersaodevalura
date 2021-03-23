setTimeout(calculator, 2000)

function calculator() {
    var strcotacao = prompt("Qual cotação do dólar hoje ?")
    var cotacao = parseFloat(strcotacao)
    var text = prompt("Qual o valor em dolar que você quer converter ?")
    var valor = parseFloat(text)
    var calc = valor * cotacao
    calc = calc.toFixed(2)
    alert(calc)

}
