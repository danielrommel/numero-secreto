// JOGO QUE PERMITE VOCE ACERTAR UM NUMERO COM TENTATIVAS LIMITADAS
alert("Bem vindo ao jogo!");

// VARIAVEIS
// #let numeroSecreto;#INTEIRO, SERÁ ATRIBUIDO O VALOR FIXO DO JOGO
// #let chute;#INTEIRO, SERÁ ATRIBUIDO UM VALOR QUE O USUARIO IRA DEFINIR PARA ELE
// #let tentiva;#INTEIRO, SERÁ REDUZIDO O VALOR PARA CADA TENTATIVA
// #let conte;#INTEIRO, SERÁ SOMADO UM VALOR PARA CADA TENTATIVA

let numeroSecreto;
let chute;
let tentiva;
let conte;
let palavraTentativa;

// ATRIBUIÇÕES DE VALORES AS VARIAVEIS

conte = 1;
tentativa = 5;
numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
// LAÇO DE REPETIÇÃO PARA QUE ENQUANTO O VALOR DIGITADO PELO USUARIO (chute) FOR DIFERENTE DO (numeroSecreto) ELE REPITA O PROCESSO ATE ACERTAR OU ATINGIR O NUMERO DE TENTATIVAS
while (chute != numeroSecreto) {
    if (tentativa == 0){
        alert("Voce atingiu o numero de tentativas, game over");
        break;
    }
    // if(tentativa == 1){
    //     alert("Voce tem "+tentativa+" tentativa");
    // } else {
    //     alert("Voce tem " + tentativa + " tentativas");
    // } 
    chute = prompt("Chute um numero para tentar acertar entre 1 e 100. Voce tem "+tentativa+" tentativa(s)");
    if (chute == numeroSecreto) {
        //CONDICIONAL USANDO OPERADOR TERNARIO, O VALOR EM TEXTO SERÁ ATRIBUIDO A VARIAVEL #palavraTentativa# DEPENDENDO DA CONDIÇÃO. SERA VERIFICADO SE CONTA É MAIOR QUE 1 ? SE SIM "tentativas" : SE NAO "tentativa" UM DESSES TEXTOS SERA ATRIBUIDO A FUNÇÃO ALERT.
        palavraTentativa = conte > 1 ? "tentativas" : "tentativa";
        alert("Parabens voce acertou com "+conte+" "+palavraTentativa);
        // if (conte == 1) {
        //     alert("Parabens voce acertou com " + conte + " tentativa");
        // } else {
        //     alert("Parabens voce acertou com " + conte + " tentativas");
        // }
    } else if (chute > numeroSecreto) {
        alert("Tente um numero menor que "+chute);
    } else {
        alert("Tente um numero maior que "+chute);
    }
    tentativa--;
    conte++;
}

// let contador = 1;
// while(contador <= 10){
//     alert("Contando de 1 a 10:" + contador);
//     contador++;
// }






// alert("Bem vindo ao jogo do numero secreto");
// let numeroSecreto = 5;
// console.log(numeroSecreto);
// let chute;
// let tentativas = 1;

// while(chute != numeroSecreto){
//         chute = prompt("Digite um numero entre 1 e 10");
//         if (chute == numeroSecreto) {
//             alert(`acertou, o numero secreto é ${numeroSecreto} com ${tentativas} tentativas`);
//         }   else {
//             if (chute > numeroSecreto){
//                 alert("O numero é menor, tente de novo");
//             } else {
//                 alert("O numero é maior, tente de novo");
//             }
//             tentativas++;
//         }
//     }


let palavraPessoa;
let quantidadePessoas = prompt("Digite o numero de pessoas");

palavraPessoa = quantidadePessoas == 1 ? "pessoa" : "pessoas";
console.log(palavraPessoa);

// alert('Boas vindas ao jogo do número secreto');

// // Adicione um console.log para verificar o valor de "chute" após a entrada do usuário
// let chute = prompt('Escolha um número entre 1 e 10');
// console.log('Valor do chute:', chute);

// let numeroSecreto = 4;

// // Adicione um console.log para verificar a comparação entre "chute" e "numeroSecreto"
// console.log('Resultado da comparação:', chute == numeroSecreto);

// if (chute == numeroSecreto) {
//     alert('Acertou');
// } else {
//     // Adicione um console.log para verificar o valor de "numeroSecreto" quando o jogador erra
//     console.log('Valor do número secreto:', numeroSecreto);
//     alert('O número secreto era ' + numeroSecreto);
// }