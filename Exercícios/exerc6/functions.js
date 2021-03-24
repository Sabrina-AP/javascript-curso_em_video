
function tabuada() {
    let numero = document.getElementById('num')
    let tab = document.getElementById('calctab')
    tab.innerHTML = '' //sem essa linha, os resultados de cada tabuada vão ficando uma embaixo da outra
    if(numero.value.length == 0){
        window.alert('Porfavor, digite um número para calcualr a tabuada')
    }else{
        let n = Number(numero.value)
        let c = 1
        while (c<=10){
            let item = document.createElement('option')
            item.text =`${n} x ${c} = ${n*c}` //se no lugar de 'n' colocar 'niumero', retorno a escrita 'object'
            item.value = `tab${c}` //permite reconhecer cada item dos options
            tab.appendChild(item)
            c+=1
        }
    }
    
}


