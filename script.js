document.addEventListener("DOMContentLoaded", () => {
    const cadastroScreen = document.getElementById("cadastro");
    const loginScreen = document.getElementById("login");
    const welcomeMessage = document.getElementById("mensagem-bemvindo");
    const nomeUsuarioSpan = document.getElementById("nome-usuario");
    const header = document.getElementById("header");
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");

    document.getElementById("form-cadastro").addEventListener("submit", function (e) {
        e.preventDefault();
        const nome = document.getElementById("nome").value;
        sessionStorage.setItem("nome", nome);
        showLoginScreen();
    });

    document.getElementById("form-login").addEventListener("submit", function (e) {
        e.preventDefault();
        const nome = sessionStorage.getItem("nome");
        if (nome) {
            nomeUsuarioSpan.textContent = nome;
            showWelcomeScreen();
        } else {
            alert("Usuário não encontrado. Por favor, cadastre-se.");
            showCadastroScreen();
        }
    });

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            const tab = button.getAttribute("data-tab");

            tabButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            tabContents.forEach(content => {
                content.classList.remove("active");
                if (content.id === tab) {
                    content.classList.add("active");
                }
            });
        });
    });

    function showCadastroScreen() {
        cadastroScreen.style.display = "block";
        loginScreen.style.display = "none";
        welcomeMessage.style.display = "none";
        header.style.display = "none";
    }

    function showLoginScreen() {
        cadastroScreen.style.display = "none";
        loginScreen.style.display = "block";
        welcomeMessage.style.display = "none";
        header.style.display = "none";
    }

    function showWelcomeScreen() {
        cadastroScreen.style.display = "none";
        loginScreen.style.display = "none";
        welcomeMessage.style.display = "block";
        header.style.display = "block";
        document.querySelectorAll('.fade-in').forEach((el, i) => {
            setTimeout(() => el.classList.add('active'), i * 200);
        });
    }

    if (sessionStorage.getItem("nome")) {
        showLoginScreen();
    } else {
        showCadastroScreen();
    }
});













