
let mail = document.getElementById('mail');
let pass = document.getElementById('pass');
let showhide = document.getElementById("show");
function show() {
    if (showhide.value == "show") {
        pass.type = "text";
        showhide.value = "hide";
    } else {
        pass.type = "password";
        showhide.value = "show";
    }
}
localStorage.clear()
function login() {
    if (mail.value == "" || pass.value == "") {
        return;
    } else {  
        if (localStorage.getItem(mail.value) == null) {
            localStorage.setItem(mail.value, pass.value);
            localStorage.setItem("activeMail" , mail.value);
            window.location.href = '5 p2.html';
        } else {
            if (pass.value == localStorage.getItem(mail.value)) {
                localStorage.setItem("activeMail" , mail.value);
                window.location.href = '5 p2.html';
            } else {
                alert("Wrong Password");
            }
        }
    }
}