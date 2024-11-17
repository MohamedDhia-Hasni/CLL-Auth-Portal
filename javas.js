
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const signupEmail = document.getElementById("signup-email");
const signupPassword = document.getElementById("signup-password");


if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const email = signupEmail.value.trim();
        const password = signupPassword.value.trim();
        
        
        if (!validateEmail(email)) {
            alert("Please enter a valid email.");
            return;
        }
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        
        alert("Your account has been created successfully!");
        
        
        setTimeout(() => {
            window.location.href = "login.html";
        }, 1000);
    });
}


if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const email = loginEmail.value.trim();
        const password = loginPassword.value.trim();
        
        
        if (!validateEmail(email)) {
            alert("Please enter a valid email.");
            return;
        }
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        
        alert("Logged in successfully!");
        
        
        setTimeout(() => {
            window.location.href = "index.html"; 
        }, 1000);
    });
}


function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}
