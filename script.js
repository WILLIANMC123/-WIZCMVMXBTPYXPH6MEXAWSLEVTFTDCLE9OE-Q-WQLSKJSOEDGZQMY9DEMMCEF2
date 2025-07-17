function verificarResposta() {
  const respostaCorreta = "o erro é a portal para a descoberta"; // <- Altere aqui a resposta se quiser
  const input = document.getElementById("resposta");
  const mensagem = document.getElementById("mensagem");

  const respostaUsuario = input.value.trim().toLowerCase();

  if (respostaUsuario === respostaCorreta.toLowerCase()) {
    mensagem.textContent = "✔️ vá ao privado de um dos ADM e escreva: Ademir";
    mensagem.classList.remove("errada");
    mensagem.classList.add("correta");
  } else {
    mensagem.textContent = "❌ Resposta incorreta. Tente novamente!";
    mensagem.classList.remove("correta");
    mensagem.classList.add("errada");
  }
}
