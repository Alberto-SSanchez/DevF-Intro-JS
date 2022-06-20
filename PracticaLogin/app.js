const user = {
    email: "user@email.com",
    password: "password"
}

// function validateInputs(){

//     if(localStorage.getItem("email") == localStorage.getItem("inputEmail") && 
//     localStorage.getItem("password") == localStorage.getItem("inputPassword")){
        
//         location.href = "./welcome.html";
//         // localStorage.removeItem("inputEmail");
//         // localStorage.removeItem("inputPassword");


//     }else{
//         localStorage.removeItem("inputEmail");
//         localStorage.removeItem("inputPassword");
//     }
// } 


const loginForm = document.querySelector("#loginForm");
const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const welcome = document.querySelector("#welcome");

document.addEventListener("DOMContentLoaded", () => {
    localStorage.setItem("password", user.password);
    localStorage.setItem("email", user.email);
})

loginForm.addEventListener("submit", () =>{

localStorage.setItem("inputEmail", inputEmail.value);
localStorage.setItem("inputPassword", inputPassword.value);

})


if(( localStorage.getItem("password") == localStorage.getItem("inputPassword")) && 
(localStorage.getItem("email") == localStorage.getItem("inputEmail"))){
    location.href = "./welcome.html";

    localStorage.removeItem("inputEmail");
    localStorage.removeItem("inputPassword");
}


// location.href = "./welcome.html";
// welcome.innerHTML = "hola";