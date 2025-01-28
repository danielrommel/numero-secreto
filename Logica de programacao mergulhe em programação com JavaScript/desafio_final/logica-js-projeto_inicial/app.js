// DESAFIOS FINAIS
// 01 - Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
// let mensagem;
// mensagem = "Boas vindas";
// console.log(mensagem);

// 02 - Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
// let nome;
// nome = "Daniel Rommel";
// console.log("Ola, " + nome);

// 03 - Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!".
// let nome;
// nome = "Daniel Rommel";
// alert(nome);

// 04 - Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
// let mensagem;
// mensagem = prompt("Qual a linguagem de programação você mais gosta?");
// console.log(mensagem);

// 05 - Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
// let valor1;
// let valor2;
// let resultado;
// valor1 = 10;
// valor2 = 19;
// resultado = valor1 + valor2;
// console.log(resultado);

// 06 - Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
// let valor1;
// let valor2;
// let resultado;
// valor1 = 14;
// valor2 = 26;
// resultado = valor1 - valor2;
// console.log(resultado);

// 07 - Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

// USANDO IF E ELSE
// let idade;
// idade = prompt("Digite sua idade");
// if (idade < 18){
//     console.log("Voce e menor de idade");
// }else{
//     console.log("Voce e maior de idade");
// }

// USANDO OP
// let mensagem;
// let idade;
// idade = prompt("Digite sua idade");
// mensagem = idade > 17 ? "Maior de idade":"Menor de idade";
// console.log(mensagem);

// 08 - Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
// let numero;
// numero = prompt("Digite um valor");
// if (numero == 0){
//     alert("Este é um numero nulo");
// }else if(numero > 0){
//     alert("Este é um numero positivo");
// }else{
//     alert("Este é um numero negativo");
// }

// 09 - Use um loop while para imprimir os números de 1 a 10 no console.
// let numero;
// numero = 1;
// alert("Contando de 1 a 10");
// while (numero < 11){
//     alert(numero);
//     numero++
// }
// alert("Fim do loop");

// 10 - Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

// USANDO IF E ELSE
// let nota;
// nota = prompt("Digite uma nota de 0 a 10");
// if(nota >= 7){
//     alert("Aprovado");
// }else{
//     alert("Reprovado");
// }

// USANDO OP
// let mensagem;
// let nota;
// nota = prompt("Digite uma nota");
// mensagem = nota >= 7 ? "aprovado" : "reprovado";
// alert(mensagem);

// 11 - Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
// let numero;
// numero = Math.random();
// console.log(numero);

// 12 - Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
// let numero;
// numero = parseInt(Math.random() * 10 + 1);
// console.log(numero);

// 13 - Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
// let numero;
// numero = parseInt(Math.random() * 1000 + 1);
// console.log(numero);


// alert("Boa vindas ao site");
// let nome = "lua";
// let idade = 25;
// let numeroDeVendas = 50;
// let saldoDisponivel = 1000;
// alert("Erro!Preencha todos os campos");
// let mensagemDeErro = "Erro!Preencha todos os campos";
// alert(mensagemDeErro);
// let nome = prompt("Digite seu nome");
// let idade = prompt("Digite sua idade");
// if (idade >= 18) {
//     alert("Pode tirar a habilitação");
// }