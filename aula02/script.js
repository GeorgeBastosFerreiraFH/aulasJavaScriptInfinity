// // Atividade 03

let numero = prompt("Digite um numero");

if (numero > 0) {
  console.log(`${numero} é um numero positivo!`);
} else if (numero < 0) {
  console.log(`${numero} é um numero negativo!`);
} else if (numero == 0) {
  console.log("O número é zero");
} else {
  console.log(`${numero} não é um número`);
}

// // ===================================================================================

// // Atividade 04

const numero1 = Number(prompt("Digite o primeiro número"));
const numero2 = Number(prompt("Digite o segundo número"));

let operacao = Number(
  prompt(
    "Qual operação deseja realizar, digite o número.\n 1 - Somar\n 2 - Subtrair\n 3 - Multiplicar\n 4 - Divir."
  )
);

if (Number.isNaN(numero1) || Number.isNaN(numero2)) {
  console.log("Digite um número valido!");
} else if (numero1 < 0 || numero2 < 0) {
  console.log("Digite um número positivo");
} else if (numero1 >= 0 || numero2 >= 0) {
  switch (operacao) {
    case 1:
      operacao = numero1 + numero2;
      console.log(`${numero1} + ${numero2} = ${operacao}`);
      break;
    case 2:
      operacao = numero1 - numero2;
      console.log(`${numero1} - ${numero2} = ${operacao}`);
      break;
    case 3:
      operacao = (numero1 * numero2).toFixed(2);
      console.log(`${numero1} * ${numero2} = ${operacao}`);
      break;
    case 4:
      operacao = (numero1 / numero2).toFixed(2);
      console.log(`${numero1} / ${numero2} = ${operacao}`);
      break;
    default:
      console.log(
        `O valor ${operacao} não corresponde a nenhuma das opções sujeridas!`
      );
      break;
  }
} else if (operacao !== Number) {
  console.log("Digite apenas números positivos");
} else {
  console.log("Digite apenas números positivos");
}

// // ===================================================================================

// Desafio

const maiorIdade = Number(prompt("Digite a maior idade do seu país"));
const idade = Number(prompt("Digite a sua idade"));

if (idade >= maiorIdade) {
  console.log(
    `A sua idade de ${idade} anos é correspondente a maior idade do seu país que é ${maiorIdade}`
  );
} else if (idade < maiorIdade) {
  console.log(
    `A sua idade de ${idade} anos não corresponde a maior idade do seu país que é ${maiorIdade}`
  );
} else {
  console.log("Entrada invalida");
}
