
//Dados de ussuarios 
const user2 = "Nubia";
const password2 = "1234";

//Inputs,button
const InputUsername = document.getElementById('user');    
const InputPassword = document.getElementById('password');
const button = document.getElementById('login');

button.addEventListener("click", verificacao);
function verificacao(){
    const UserDigitado = InputUsername.value.trim();
    const SenhaDigitado = InputPassword.value.trim();
    if(UserDigitado  == user2 && SenhaDigitado == password2 ){window.location.href="Tela.html"}
    else{(alert("ME manda um pix de 200"))};
    
};





   

