function dropdown() {
    let dropIcon = document.querySelector("#navbar-middle");
    if (dropIcon.className==="navbar-middle"){
        dropIcon.className = "drop-list";
    }
    else {
        dropIcon.className ="navbar-middle";
    }
}

const loginBtn = document.querySelector("#login-btn");
const signupBtn = document.querySelector("#signup-btn");

function createLoginForm() {
    return window.location.href = "./registration/index.html";
}

loginBtn.addEventListener("click", createLoginForm);
signupBtn.addEventListener("click", createLoginForm);
