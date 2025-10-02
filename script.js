// Simples alerta ao enviar o formulário
document.getElementById("formContato").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Obrigado por entrar em contato! Em breve responderemos.");
    this.reset();
  });
  