// Função para mostrar os cards ao rolar a página
document.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".card");
  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add("visible");
    }
  });
});

// Efeito especial para projetos autorais
document.addEventListener("scroll", () => {
  const autorais = document.querySelectorAll(".autorais .card");
  const triggerBottom = window.innerHeight * 0.85;

  autorais.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.style.boxShadow = "0 0 15px #ff80bf";
    }
  });
});
