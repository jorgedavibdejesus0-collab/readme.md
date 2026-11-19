// Elementos do formulário e da lista
const formulario = document.querySelector("#formulario");
const lista = document.querySelector("#lista");
const mensagem = document.querySelector("#mensagem");
const semAlunos = document.querySelector("#sem-alunos");

// Elementos do botão interativo
const botao = document.querySelector("#botao");
const contador = document.querySelector("#contador");

let cliques = 0;

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nome = document.querySelector("#nome").value;
  const matricula = document.querySelector("#matricula").value;
  const email = document.querySelector("#email").value;
  const nascimento = document.querySelector("#nascimento").value;

  const item = document.createElement("li");
  item.classList.add("item-aluno");

  const dados = document.createElement("div");
  dados.classList.add("dados-aluno");
  dados.innerHTML =
    "<strong>" + nome + "</strong><br>" +
    "Matrícula: " + matricula + "<br>" +
    "E-mail: " + email + "<br>" +
    "Nascimento: " + formatarData(nascimento);

  const botaoExcluir = document.createElement("button");
  botaoExcluir.textContent = "Excluir";
  botaoExcluir.type = "button";
  botaoExcluir.classList.add("botao-excluir");

  botaoExcluir.addEventListener("click", function () {
    item.remove();
    atualizarListaVazia();
  });

  item.appendChild(dados);
  item.appendChild(botaoExcluir);
  lista.appendChild(item);

  mensagem.textContent = "Aluno cadastrado com sucesso!";
  formulario.reset();
  atualizarListaVazia();

  setTimeout(function () {
    mensagem.textContent = "";
  }, 3000);
});

function formatarData(data) {
  const partes = data.split("-");
  return partes[2] + "/" + partes[1] + "/" + partes[0];
}

function atualizarListaVazia() {
  if (lista.children.length === 0) {
    semAlunos.style.display = "block";
  } else {
    semAlunos.style.display = "none";
  }
}

botao.addEventListener("click", function () {
  cliques = cliques + 1;

  if (cliques === 1) {
    contador.textContent = "Você clicou 1 vez.";
  } else {
    contador.textContent = "Você clicou " + cliques + " vezes.";
  }
});

atualizarListaVazia();