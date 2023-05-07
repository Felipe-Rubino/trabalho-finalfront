// Dark mode
const btn = document.getElementById("btn")

btn.addEventListener("click" , (e)  => {
  document.body.classList.toggle("dark", e.target.checked)
})

// Fale conosco
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.querySelector("#nome").value;
  const email = document.querySelector("#email").value;
  const tel = document.querySelector("#tel").value;
  const assunto = document.querySelector("#assunto").value;
  const mensagem = document.querySelector("#mensagem").value;

  localStorage.setItem("nome", nome);
  localStorage.setItem("email", email);
  localStorage.setItem("tel", tel);
  localStorage.setItem("assunto", assunto);
  localStorage.setItem("mensagem", mensagem);

  form.reset();
});
