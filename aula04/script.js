// Atividade Pratica 1

// let numero = 0;

// while (numero < 10) {
//   numero++;
//   console.log(numero);
// }

// Atividade Pratica 3

// const numeroSecreto = 3;

// while (true) {
//   let numeroDigitado = prompt("Digite um numero de 1 a 10");
//   if (numeroDigitado == numeroSecreto) {
//     alert("Parabéns você acertou o numero secreto");
//     break;
//   }
// }

// Atividade aula

// const segredo = "SEGREDO";

// while (true) {
//   let tentativas = prompt("Digite qual o segredo").toUpperCase();
//   if (segredo === tentativas) {
//     alert("Parabéns você acertou o segredo");
//     break;
//   }
// }

// -----------------------------------------------------------------------

// carrinho de compras

// let listaDeProdutos = [];

// while (true) {
//   let produto = prompt(
//     "Digite um produto a ser adicionado à lista ou 'sair' para fechar"
//   );

//   if (produto.toLowerCase() === "sair") {
//     alert("Encerrando Programa");
//     break;
//   }

//   listaDeProdutos.push(produto);
// }

// listaDeProdutos.map((elemento, indice) => {
//   console.log(`${indice + 1}. ${elemento}`);
// });

// -----------------------------------------------------------------------

// let listaDeNumeros = [];
// let soma = 0;

// for (let i = 0; i < 4; i++) {
//   let numeroDigitado = parseInt(prompt("Digite um numero"));
//   soma += numeroDigitado;
//   listaDeNumeros.push(numeroDigitado);
// }

// console.log(`A soma de todos o numero é ${soma}.`);

// -----------------------------------------------------------------------

const numeros = [
  12, -47, 83, -16, -89, 25, 34, -66, 91, -4, 55, -93, 8, -21, 77, -38, -100,
  49, -12, 64, -29, 36, -77, 95, -61, 19, -86, 73, -44, 27, -5, 88, -91, 6, -30,
  58, -17, 40, -63, 79, -8, 23, -52, 97, -75, 14, -99, 67, -26, 31,
];

const listaNumerosPositivos = [];
const listaNumerosNegativos = [];

numeros.forEach((element) => {
  if (element < 0) {
    listaNumerosNegativos.push(element);
  } else {
    listaNumerosPositivos.push(element);
  }
});

console.log(
  `Essa é a lista de número negativos ${listaNumerosNegativos.sort()}`
);
console.log(
  `Essa é a lista de número positivos ${listaNumerosPositivos.sort()}`
);
