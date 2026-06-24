
// tema //

const botaoTema = document.getElementById("tema");

// Carrega o tema salvo
if (localStorage.getItem("tema") === "escuro") {
    document.body.classList.add("dark");
    botaoTema.textContent = "☀️";
}

botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("tema", "escuro");
        botaoTema.textContent = "☀️";
    } else {
        localStorage.setItem("tema", "claro");
        botaoTema.textContent = "🌙";
    }
});

// Validação do formulário

const formulario = document.getElementById("formContato");

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (nome === "" || email === "" || mensagem === "") {
        alert("Preencha todos os campos.");
        return;
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(email)) {
        alert("Digite um e-mail válido.");
        return;
    }

    alert("Mensagem enviada com sucesso!");

    formulario.reset();
});

