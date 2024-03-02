// account 

// login container
var loginForm = document.getElementById("login-container");
var loginBtn = document.getElementsByClassName("login");
var formClose = document.getElementById("form-close");



//signup container
let signup_form = document.getElementById("signup-container");





// login click event

loginBtn.addEventListener('click',() => {
    loginForm.classList.add('active')
});