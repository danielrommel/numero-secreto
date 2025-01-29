let listaDeNumerosSorteados;
let quantidadeDeElementosNaLista;
let numeroLimite;
let numeroEscolhido;
let tentativa;

listaDeNumerosSorteados = [];
numeroLimite = 100;

let campo;
let numeroSecreto;
let chute;
let resultado;



// titulo = document.querySelector("h1");
// titulo.innerHTML = "Bem vindo ao Jogo";

// paragrafo = document.querySelector("p");
// paragrafo.innerHTML = "Digite um numero";

function exibirTextoNaTela(tag, texto){
    campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function mensagemTelaInicial(){
    exibirTextoNaTela("h1", "Bem vindo ao Jogo");
    exibirTextoNaTela("p", "Digite um numero");
}

mensagemTelaInicial();

// FUNÇÃO COM PARAMETRO E RETORNO - VOCE COLOCA UM VALOR COMO PARAMETRO QUE VAI SER ANALISADO SE É IGUAL, MAIOR OU MENOR QUE O NUMERO SECRETO E IRA EXIBIR UMA MESANGEM QUE VAI SER ARMAZENADA COMO RETORNO A UMA VARIAVEL
// function verificarChute(num){
//     if(num == numeroSecreto){
//         return "Voce acertou";
//     } else if (num > numeroSecreto){
//         return "O numero era menor";
//     } else{
//         return "O numero era maior";
//     }
// }
// resultado = verificarChute(6);
// console.log(resultado);

function verificarChute(){
    chute = document.querySelector("input").value;
    if(chute == numeroSecreto){
        exibirTextoNaTela("h1", "Acertou");
        limparCampo()
        document.getElementById("reiniciar").removeAttribute("Disabled");
    } else if(chute >= numeroSecreto){
        exibirTextoNaTela("h1", "Errou");
        exibirTextoNaTela("p", "Tente um numero menor");
    } else{
        exibirTextoNaTela("h1", "Errou");
        exibirTextoNaTela("p", "Tente um numero maior");
    }
}
function gerarNumeroAleatorio(){
    numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
  
    if(quantidadeDeElementosNaLista == 4){
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}
numeroSecreto = gerarNumeroAleatorio();

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    mensagemTelaInicial();
    limparCampo();
    document.getElementById("reiniciar").setAttribute("Disabled", true);
}

// numeroSecreto = gerarNumeroAleatorio();
// console.log(numeroSecreto);