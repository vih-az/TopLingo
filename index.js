'use strict'

const traducaoInput = document.getElementById('texto')
const lua = document.getElementById('lua')
const body = document.querySelector('body')
let mudar = false
const mudarBotao = document.getElementById('mudarBotao')
const pegarTraducao = async function(traducao){
    const url = `https://api.mymemory.translated.net/get?q=${traducao}&langpair=pt-br|en`
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
const mudarCorDeFundo = function(){
    if(mudar == false){
        mudar = true
        lua.src = './img/sol.png'
        body.style.backgroundColor = '#000000'
        const traducaoInput2 = document.getElementById('traducao')
        traducaoInput2.style.color = '#ffffff'
        const divInput1 = document.getElementById('divInput1')
        divInput1.style.borderBottom = '2px solid #ffffff'
    }else{
        mudar = false
        lua.src = './img/lua.png'
        body.style.backgroundColor = '#ffffff'
        const traducaoInput2 = document.getElementById('traducao')
        traducaoInput2.style.color = '#000000'
        const divInput1 = document.getElementById('divInput1')
        divInput1.style.borderBottom = '2px solid #000000'
        const divInput2 = document.getElementById('divInput2')
        divInput2.style.borderBottom = '2px solid #000000'
    }
}
mudarBotao.addEventListener('click', mudarCorDeFundo)