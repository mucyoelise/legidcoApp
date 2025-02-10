function dropdown() {
    var dropIcon = document.querySelector("#navbar-middle");
    if (dropIcon.className === "navbar-middle") {
        dropIcon.className = "drop-list";
    }
    else {
        dropIcon.className = "navbar-middle";
    }
}
var loginBtn = document.querySelector("#login-btn");
var signupBtn = document.querySelector("#signup-btn");
function createLoginForm() {
    return window.location.href = "./registration/index.html";
}
loginBtn.addEventListener("click", createLoginForm);
signupBtn.addEventListener("click", createLoginForm);
