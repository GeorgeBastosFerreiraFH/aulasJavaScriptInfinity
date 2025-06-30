function mostrarSecao(id) {
  document.querySelectorAll(".secao").forEach((secao) => {
    secao.classList.remove("ativa");
  });
  document.getElementById(id).classList.add("ativa");
}

function mostrarNumeros() {
  const lista = document.getElementById("numeros");
  lista.innerHTML = "";
  for (let i = 1; i <= 10; i++) {
    const item = document.createElement("li");
    item.textContent = `Número:${i}`;
    lista.appendChild(item);
  }
}

function verificarIdade() {
  const idade = parseInt(document.getElementById("idade").value);
  let resultado;

  if (idade >= 18) {
    resultado = "Maior de Idade";
  } else if (idade >= 0) {
    resultado = "Menor de Idade";
  } else {
    resultado = "Idade invalida";
  }
  document.getElementById("resultado").innerText = resultado;
}

function contarWhile() {
  let count = 1;
  let resultado = "";
  while (count <= 5) {
    resultado += `Contando: ${count}<br>`;
    count++;
  }
  document.getElementById("saidaWhile").innerHTML = resultado;
}

function mostrarFrutas() {
  const frutas = ["Maçã", "Banana", "Uva", "Pera", "Laranja"];
  const lista = document.getElementById("frutas");
  lista.innerHTML = "";
  for (let i = 0; i < frutas.length; i++) {
    const item = document.createElement("li");
    item.textContent = frutas[i];
    lista.appendChild(item);
  }
}
