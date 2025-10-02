// Formulário de contato
document.getElementById("formContato").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Mensagem enviada com sucesso! Obrigado por entrar em contato.");
    this.reset();
  });
  
  // Animações ao rolar a página
  const elementos = document.querySelectorAll(".fade-in");
  
  function aparecerScroll() {
    const trigger = window.innerHeight * 0.85;
    elementos.forEach(el => {
      const pos = el.getBoundingClientRect().top;
      if (pos < trigger) {
        el.classList.add("aparecer");
      }
    });
  }
  
  window.addEventListener("scroll", aparecerScroll);
  window.addEventListener("load", aparecerScroll);
  