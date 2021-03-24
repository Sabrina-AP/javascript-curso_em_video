let num =document.querySelector('input#num')
let lista = document.querySelector('select#item')
let retorno = document.querySelector('div#retorno')
let val=[]

function isNumeric(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}


function adiciona() {
    if(isNumeric(num.value) && !inLista(num.value, val)){
        val.push(Number(num.value))
        let itens =document.createElement('option')
        itens.text= `valor ${num.value} adicionado.`
        lista.appendChild(itens)

    }else{
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value=''
    num.focus()
}



function finaliza() {
    if(val.length == 0){
        window.alert('Adicione valores antes de clicar em finalizar!')
    }else{
        let tot = val.length
        let maior = val[0]
        let menor = val[0]
        let soma = 0
        let media = 0

        for(let pos in val){
            soma +=val[pos]
            if(val[pos]>maior){
                maior = val[pos]
            }
            if (val[pos]<menor){
                menor=val[pos]
            }
        }
        media = soma/tot
        retorno.innerHTML = ''
        retorno.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.<p>`
        retorno.innerHTML += `<p>O maior valor adicionado foi ${maior}.<p>`
        retorno.innerHTML += `<p>O menor valor adicionado foi ${menor}.<p>`
        retorno.innerHTML += `<p>Somando todos os valores adicionados, temos ${soma}.<p>`
        retorno.innerHTML += `<p>A média dos valores adicionados foi ${media}.<p>`
    }
}
