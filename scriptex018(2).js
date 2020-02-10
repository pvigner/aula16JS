var lista_numeros = []

function adicionar() {
    var num = window.document.getElementById('txtnum')
    var tab = window.document.getElementById('seltab')
    var convert = Number(num.value)
    if (num.value < 1 || num.value > 100) {
        window.alert('[ERRO} verifique os dados e tente novamente')
        } else { 
            var item = document.createElement('option')   
            item.text = `Valor ${convert} adicionado` 
            tab.appendChild(item)
            lista_numeros.push(convert) }
            var pos = lista_numeros.indexOf(convert)
           
            if (lista_numeros.length - pos > 1) {
                window.alert('Valor já adicionado')
                lista_numero.pop();
            }
    }
    function finalizar() {
    var soma = 0
    var maior = Math.max.apply(null, lista_numeros)
    var menor = Math.min.apply(null, lista_numeros)
    
        for (var i = 0; i < lista_numeros.length; i++) {
            soma = soma + lista_numeros[i];
        }
        var media = soma / lista_numeros.length;
        {
        res.innerHTML = `<p>A lista possui ${lista_numeros.length} elementos</p>`
        res.innerHTML += `<p>A soma dos elementos é igual a ${soma}</p>`
        res.innerHTML += `<p>A média do vetor é ${media}</p>`
        res.innerHTML += `<p>O maior elemento do vetor é o número ${maior}</p>`
        res.innerHTML += `<p>O menor elemento do vetor é o número ${menor}</p>`

    }
}