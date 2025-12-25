let email = document.querySelector("#email")
let password = document.querySelector("#password")
let form = document.querySelector("form")

form.addEventListener("submit", function(e){
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let emailans = emailRegex.test(email.value);
    let passwordans = passwordRegex.test(password.value);
    if(!emailans){
        document.querySelector("small").style.visibility = "visible";
    }
    if(!passwordans){
        document.querySelectorAll("small")[1].style.visibility = "visible";
    }
});
