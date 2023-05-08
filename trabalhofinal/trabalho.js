const btn = document.getElementById("btn");


//const bot = document.getElementById("bot")

btn.addEventListener("click", (e) => {
  document.body.classList.toggle("dark", e.target.checked);
});

function mouseOut() {
  document.querySelector("#bot p").style.display = "none";
}

function mouseOver() {
  document.querySelector("#bot p").style.display = "block";
}

