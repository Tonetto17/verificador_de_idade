function verificar(){
    var data = new Date()
    var ano = data.getFullYear() //Pega os 4 digitos do ano
    var fano = window.document.getElementById('txtano')
    var  res= window.document.getElementById('res')
    if(fano.value.length ==0 || fano.value> ano){
        window.alert('Verifique os dados e tente novamente!')
    }else{
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)//Calculando a idade
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex [0].checked){
            genero = 'Homem'
            if(idade>=0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/bebe_homem.jpg')
            }else if ( idade <21){
                //jovem
                img.setAttribute('src', 'imagens/jovem_homem.jpg')
            }else if (idade <50){
                //adulto
                img.setAttribute('src', 'imagens/homem_adulto.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'imagens/idoso.jpg')
            }
        } else if(fsex[1].checked){
            genero='Mulher'
            if(idade>=0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/bebe_mulher.jpg')
            }else if ( idade <21){
                //jovem
                img.setAttribute('src', 'imagens/jovem_mulher.jpg')
            }else if (idade <50){
                //adulto
                img.setAttribute('src', 'imagens/mulher_adulta.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'imagens/idosa.jpg')
            }
        }
        res.style.textAlign='center' //style em js
        res.innerHTML =`Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}