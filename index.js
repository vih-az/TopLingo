'use strict'

const traducaoInput = document.getElementById('texto')

const pegarTraducao = async function(traducao){
    const url = `https://api.mymemory.translated.net/get?q=${traducao}&langpair=en|pt-br`
    const response = await fetch(url)
    const pegarTraducaoRetornar = await response.json()
    return pegarTraducaoRetornar
}

const mostrarTraducao = async function(){
    if(traducaoInput.value == '' || traducaoInput.value == null){
        alert('Por favor escreva')
    }else{
        const traducaoInput2 = document.getElementById('traducao')
        const mostrarTraducaoPega = await pegarTraducao(traducaoInput.value)
        traducaoInput2.value = mostrarTraducaoPega.responseData.translatedText
    }
}

traducaoInput.addEventListener('keypress', (event) => {
    if(event.code === 'Enter'){
        mostrarTraducao()
    }
})