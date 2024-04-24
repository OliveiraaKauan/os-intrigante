function loginUser() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // Aqui você pode adicionar a lógica de autenticação
    // Vou fornecer um exemplo simples:
    if (username === "usuario1" && password === "senha1") {
        window.location.href = "pagina1.html";
    } else if (username === "usuario2" && password === "senha2") {
        window.location.href = "pagina2.html";
    } else {
        document.getElementById("loginMessage").innerHTML = "Usuário ou senha incorretos.";
        return false; // Impede o envio do formulário
    }
}
function loginUser() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // Aqui você pode adicionar a lógica de autenticação
    // Vou fornecer um exemplo simples:
    if (username === "usuario1" && password === "senha1") {
        window.location.href = "pagina1.html";
    } else if (username === "usuario2" && password === "senha2") {
        window.location.href = "pagina2.html";
    } else {
        document.getElementById("loginMessage").innerHTML = "Usuário ou senha incorretos.";
        return false; // Impede o envio do formulário
    }
}
// Adicionando um evento de clique ao link "Contato"
document.getElementById('link-contato').addEventListener('click', function(event) {
    // Impede o comportamento padrão do link (evita a mudança de página)
    event.preventDefault();

    // Exibe a área de contato
    document.getElementById('area-contato').style.display = 'block';
});
