function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passos = document.getElementById('passos')
    var res = document.getElementById('res')
    
    if(inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0 ){
        res.innerHTML = '[ERRO] Preencha todos os campos!'
    }else{
       
        res.innerHTML = 'Contando...'
        let ini = Number(inicio.value)
        let fi = Number(fim.value)
        let pas = Number(passos.value)
        if(pas <= 0){
            window.alert('Passo invalido, considerando [PASSO = 1]')
            pas = 1
        }
        if(ini < fi){
            for(let c = ini ; c <= fi ; c += pas){
                res.innerHTML += `${c} 👉🏽`
            }
        }else{
            for(let c = ini ; c >= fi ; c -= pas){
                res.innerHTML += `${c} 👉🏽`
        }
    }
        res.innerHTML += (' 🏁')
        
    
    }
}