var fechar=window.document.body.getElementsByClassName('bntao')[0]
var lista=window.document.body.getElementsByClassName('lwin')[0]
var abrir=window.document.body.getElementsByClassName('wtype')[0]

abrir.addEventListener('click',clk)
fechar.addEventListener('click',clk01)

function clk(){
    lista.style.display='block'
}
function clk01(){
    lista.style.display='none'
}




var fechar01=window.document.body.getElementsByClassName('Tbntao')[1]
var tabs=window.document.body.getElementsByClassName('tabInfo')[1]
var abrir01=window.document.body.getElementsByClassName('Tabela-cab')[1]

abrir.addEventListener('click',klc)
fechar.addEventListener('click',klc01)

function klc(){
    lista.style.display='block'
}
function klc01(){
    lista.style.display='none'
}


