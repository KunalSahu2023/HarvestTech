
// register form scripting start

let formBtn = document.querySelector('.btn');
let accountForm = document.querySelector('#account-container');
let formCloseBtn = document.querySelector('#form-close');

formBtn.addEventListener('click', () =>{
   accountForm.classList.add('active')
});
formCloseBtn.addEventListener('click', () =>{
   accountForm.classList.remove('active')
});

// register form scripting end

// login signup navigation button scripting start

let signUpBtn = document.querySelector('.signupbtn');
let logInBtn = document.querySelector('.loginbtn');
let nameField = document.querySelector('.nameField');
let title = document.querySelector('.title');
let underline = document.querySelector('.underline');
let text = document.querySelector('.text');
let button = document.querySelector(".account-btn")

signUpBtn.addEventListener('click',()=>{
    nameField.style.maxHeight ='60px';
    title.innerHTML = 'Sign Up';
    text.innerHTML = 'Password suggestions';
    signUpBtn.classList.remove('disable');
    logInBtn.classList.add('disable');
    underline.style.transform = 'translateX(-50px)';
    button.innerHTML = "Sign Up"
})

logInBtn.addEventListener('click',()=>{
    nameField.style.maxHeight ='0';
    title.innerHTML = 'Log In';
    text.innerHTML = ' Forget Password ';
    logInBtn.classList.remove('disable');
    signUpBtn.classList.add('disable');
    underline.style.transform = 'translateX(65px)';
    button.innerHTML = "Log In";
});

// login signup navigation button scripting end

// msg box scripting start

let msgBox = document.querySelector('#msg-box');
let loginContent = document.querySelector('.login-content');
let signupContent = document.querySelector('.signup-content');
let titles = document.querySelector('.title');
let okayBtn = document.querySelector('.okay');

button.addEventListener('click', () =>{
   msgBox.style.display = "flex";
   accountForm.classList.remove('active')
   
});
// msg box scripting end

// dashboard scripting start

let dashboardBtn = document.querySelector('.dashboard')
let dashboard = document.querySelector("#dashboard-container")

dashboardBtn.addEventListener('click', ()=>{
   dashboard.classList.toggle("show-dashboard");
   console.log("dashboard clicked");
});
// dashboard scripting end

// profile scripting start

let userProfile = document.querySelector('.fa-user');
let profile = document.querySelector('#profile-container');

userProfile.addEventListener('click', ()=>{
   profile.classList.toggle("show-profile");
   console.log("profile clicked");
});

//profile scripting end

// frequently question scripting start
let plusBtn = document.querySelector('.fa-plus');
let answer = document.querySelector('.ans');
let minusBtn = document.querySelector('.fa-minus');

plusBtn.addEventListener('click', ()=>{
   answer.style.display = "block";

});
minusBtn.addEventListener('click',()=>{
   answer.style.display = "none";
   console.log("answer hide");
});

// frequently question scripting end







