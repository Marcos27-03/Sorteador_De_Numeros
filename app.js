function sortear() {
    let listaNumeros = []
    let QtdDeNumeros = document.getElementById("quantidade").value;
    let De = Number(document.getElementById("de").value);
    let ate = Number(document.getElementById("ate").value);

    if(QtdDeNumeros > ate - De + 1 || De > ate){
      erro();
      return}

for (let i = 0; i < QtdDeNumeros; i++) {
    let numeroSorteado = SortearNumero(De, ate);
    (listaNumeros.includes(numeroSorteado)) ;
        do {numeroSorteado = SortearNumero(De, ate);}
        while ((listaNumeros.includes(numeroSorteado)));
    
        listaNumeros.push(numeroSorteado);
        listaNumeros.sort((a, b) => a - b)
}
aparecernatela("resultado", ` <label class="texto__paragrafo">Números sorteados:  ${listaNumeros.join(', ')}</label>`);
MudarClasseBotao("btn-reiniciar");
MudarClasseBotao("btn-sortear")
}

function erro() {
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    alert('ERRO! Reveja os valores inseridos');
}

function MudarClasseBotao(id) {
    let botao = document.getElementById(id);
    if(botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao")   
    }  
    else{
        botao.classList.remove('container__botao');
        botao.classList.add("container__botao-desabilitado")}
}

function SortearNumero(min, max) {
    return parseInt(Math.random() * (max - min + 1)) + min;
}

function reiniciar() {
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    MudarClasseBotao("btn-reiniciar");
    MudarClasseBotao("btn-sortear");
    aparecernatela("resultado",  '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>')
}

function aparecernatela(id, texto) {
    campo = document.getElementById(id)
    campo.innerHTML = texto
}



//testes errados (ver o que fiz de errado)
//(while(QtdDeNumeros > listaNumeros.length){
   // let numeroSorteado = SortearNumero(De, ate);  
 //if(listaNumeros.includes(numeroSorteado)) {
  //  numeroSorteado = SortearNumero(De, ate)
 //}else {
   // listaNumeros.push(numeroSorteado);
 //}
//}
//alert(listaNumeros)

//if(QtdDeNumeros > ate - De + 1 || De > ate){
  //  erro();
//}else{