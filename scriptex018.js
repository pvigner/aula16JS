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
            lista_numeros.push(convert)
                        
            /*for (valores in lista_numeros) {
                if (convert == lista_numeros[valores]) {
                    alert('Valor já existente') 
                } else { 
                    lista_numeros.push(convert)
                    */   

                }
            }
function finalizar() {
    var soma = 0
    var maior = 0
    var menor = 0
    var media = 0
        for (var i = 0; i < lista_numeros.length; i++) {
            soma = soma + lista_numeros[i];
        }
            /*for (var mai = 0; mai < lista_numeros.length; mai++) {
            if (lista_numeros[mai] > maior) {
                maior = lista_numeros[mai] ; 
            } */
    
            {
       
        res.innerHTML = `<p>A lista possui ${lista_numeros.length} elementos</p>`
        res.innerHTML += `<p>A soma dos elementos é igual a ${soma}</p>`
        res.innerHTML += `<p>O maior elemento do vetor é o número ${maior}</p>`
        res.innerHTML += `<p>O menor elemento do vetor é o número ${menor}</p>`
    }
}
