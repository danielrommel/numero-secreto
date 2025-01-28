let titulo;
let paragrafo;
let campo;
let numeroSecreto;
let chute;
let tentativa;
let palavraTentativa;
let mensagemTentativa;
numeroSecreto = 8;
tentativa = 1;
// numeroSecreto = gerarNumeroAleatorio();

// CRIANDO SELETORES PARA CADA TAG EXEMPLO:
// (h1) HTML TEM A VARIAVEL (titulo) JS / (p) HTML TEM A VARIAVEL PARA (paragrafo) JS

// titulo = document.querySelector("h1");
// titulo.innerHTML = "Adivinhe o";

// paragrafo = document.querySelector("p");
// paragrafo.innerHTML = "Adivinhe um numero entre 1 e 10";

// CRIANDO UMA FUNÇÃO QUE SE USA PARA REUTILIZAR O SELETOR SEMPRE QUE A FUNÇÃO FOR INVOCADA

function exibirTextoNaTela(tag, texto){
    campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
exibirMensagemInicial();

function verificarNumero(){
    chute = document.querySelector("input").value;
    if(chute == numeroSecreto){
        exibirTextoNaTela("h1", "Acertou");
        palavraTentativa = tentativa > 1 ? "tentativas" : "tentativa";
        mensagemTentativa = "Voce acertou com "+tentativa+" "+palavraTentativa;
        exibirTextoNaTela("p", mensagemTentativa);
        document.getElementById("reiniciar").removeAttribute("disabled");

    } else if(chute > numeroSecreto){
        exibirTextoNaTela("h1", "Errou");
        exibirTextoNaTela("p", "O numero é menor");
    }else{
        exibirTextoNaTela("h1", "Errou");
        exibirTextoNaTela("p", "O numero é maior");
    }
    tentativa++;
    limparCampo();
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}
function exibirMensagemInicial(){
    exibirTextoNaTela("h1", "Jogo do numero secreto");
    exibirTextoNaTela("p", "Escolha um numero entre 1 e 10");
}
function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}