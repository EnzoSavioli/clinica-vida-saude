// Botão para trocar entre tema claro e escuro
const botaoTema = document.getElementById("botao-tema");

function atualizarTema() {
  const temaEscuro = document.body.classList.contains("tema-escuro");

  if (temaEscuro) {
    botaoTema.textContent = "☀️ Tema claro";
    botaoTema.setAttribute("aria-label", "Ativar tema claro");
  } else {
    botaoTema.textContent = "🌙 Tema escuro";
    botaoTema.setAttribute("aria-label", "Ativar tema escuro");
  }
}

// Verifica se o visitante já escolheu um tema anteriormente
const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "escuro") {
  document.body.classList.add("tema-escuro");
}

if (botaoTema) {
  atualizarTema();

  botaoTema.addEventListener("click", function () {
    document.body.classList.toggle("tema-escuro");

    if (document.body.classList.contains("tema-escuro")) {
      localStorage.setItem("tema", "escuro");
    } else {
      localStorage.setItem("tema", "claro");
    }

    atualizarTema();
  });
}
