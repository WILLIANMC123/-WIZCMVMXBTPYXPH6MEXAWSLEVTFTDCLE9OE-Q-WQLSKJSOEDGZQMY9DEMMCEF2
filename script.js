function verificarResposta() {
  const respostaCorreta = "fogo"; // <- Edite aqui sua resposta correta
  const input = document.getElementById("resposta");
  const mensagem = document.getElementById("mensagem");

  const respostaUsuario = input.value.trim().toLowerCase();

  if (respostaUsuario === respostaCorreta.toLowerCase()) {
    mensagem.textContent = "✔️ Resposta correta! Muito bem!";
    mensagem.classList.remove("errada");
    mensagem.classList.add("correta");
  } else {
    mensagem.textContent = "❌ Resposta incorreta. Tente novamente!";
    mensagem.classList.remove("correta");
    mensagem.classList.add("errada");
  }
}
