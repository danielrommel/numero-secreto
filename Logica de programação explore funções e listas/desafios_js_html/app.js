// let local;
// let titulo;

// ESCREVENDO UM TITULO PARA HTML USANDO JS
// titulo = document.querySelector("h1");
// titulo.innerHTML = "Hora do Desafio";

// CRIANDO FUNCOES JS QUE MOSTRE NA CONSOLE OU NA TELA QUANDO EU CLICAR NO BOTAO DO HTML
// function ativarBotao(){
//     console.log("Clicado no botao");
// }
// function mensagem(){
//     alert("Eu amo JS");
// }
// function digiteLocal(){
//     local = prompt("Digite seu local ");
//     alert("Estive em cidade "+local+" e lembrei de voce");
// }
// DESAFOPS JS COM HTML
// 2 - Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let titulo;
titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do desafio";

// 3 - Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function clicarBotao(){
    console.log("Estou clicando");
}

// 4 - Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function botaoAlerta(){
    alert("Eu amo JS");
}

// 5 - Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
let lugar;
function digiteLugar(){
    lugar = prompt("Digite sua localização");
    alert("Estive em "+lugar+" e lembrei de voce");
}

// 6 - Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
let valor1;
let valor2;
let resultado;
function somaValor(){
    // try{
    //     valor1 = parseInt(prompt("Digite um valor"));
    //     valor2 = parseInt(prompt("Digite outro valor"));
    // } catch(e){
    //     console.log("Erro: "+e);
    // }
    valor1 = parseInt(prompt("Digite um valor"));
    valor2 = parseInt(prompt("Digite outro valor"));
    resultado = valor1 + valor2;
    alert("O resultado da soma é "+resultado);
}


