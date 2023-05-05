    const btn = document.getElementById("btn")

    btn.addEventListener("click" , (e)  => {
        document.body.classList.toggle("dark", e.target.checked)
    })