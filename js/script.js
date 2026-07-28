document.getElementById("login").onclick = function () {
    window.location.href = "Tela.html";
};



//Dados de ussuarios 
const user2 = "Gustavo";
const password2 = 1234;

//Inputs,button
const InputUsername = document.getElementById('user');    
const InputPassword = document.getElementById('password');
const button = document.getElementById('login')

button.addEventListener("click", verificacao)  
function verificacao(){
    const UserDigitado = InputUsername.value.trim();
    const SenhaDigitado = InputPassword.value.trim();
};




