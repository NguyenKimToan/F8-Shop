function login() {
    let userName = document.getElementById('username').value;
    let passWord = document.getElementById('password').value;
    if (userName == "a" && passWord == "1") {
        document.querySelector(".app").style.display = 'block';
        document.querySelector(".modal__body").style.display = "none";
        document.querySelector(".modal").style.display = 'none';
    }
    else {
        document.querySelector(".modal__body").style.zIndex = '1';
    }
}