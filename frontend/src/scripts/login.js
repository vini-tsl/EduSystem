// ===== MOSTRAR / OCULTAR SENHA =====

const toggleSenha = document.getElementById("toggleSenha");
const senhaInput = document.getElementById("senha");

toggleSenha.addEventListener("click", () => {

if(senhaInput.type === "password"){

senhaInput.type = "text";
toggleSenha.classList.replace("fa-eye","fa-eye-slash");

}else{

senhaInput.type = "password";
toggleSenha.classList.replace("fa-eye-slash","fa-eye");

}

});


// ===== VALIDAÇÃO DO LOGIN =====

const form = document.getElementById("loginForm");
const erro = document.getElementById("erroLogin");

form.addEventListener("submit", function(e){

e.preventDefault();

/* Pega os valores */

const email = document.getElementById("email").value;
const senha = document.getElementById("senha").value;

/* Validação simples */

if(email === "" || senha === ""){

erro.textContent = "Preencha todos os campos.";
return;

}

/* Simulação de login */

if(email === "admin@edusystem.com" && senha === "123456"){

alert("Login realizado com sucesso!");

/* redirecionar para dashboard */

window.location.href = "app.html";

}else{

erro.textContent = "Usuário ou senha inválidos.";

}

});