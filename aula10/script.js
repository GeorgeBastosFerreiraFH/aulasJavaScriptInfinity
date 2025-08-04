// Atividade 01

// const numeroDigitado = document.querySelector("#numero");
// const resultadoFinal = document.querySelector("#resultado");
// const meuBotao = document.querySelector("#botao");

// meuBotao.addEventListener("click", function () {
//   const valor = numeroDigitado.value;

//   if (valor % 2 === 0) {
//     resultadoFinal.innerHTML = `O número ${valor} é par`;
//   } else if (valor % 2 !== 0) {
//     resultadoFinal.innerHTML = `O número ${valor} é impar`;
//   } else {
//     resultadoFinal.innerHTML = `Digite algum número valido`;
//   }
// });

// Atividade 02

const inputLista = document.querySelector("#inputLista");
const lista = document.querySelector("#lista");
const meuBotao = document.querySelector("#botao");

meuBotao.addEventListener("click", function () {
  let inputValue = inputLista.value;
  let li = document.createElement("li");
  li.textContent = inputValue;

  lista.appendChild(li);

  inputLista.value = "";
});
