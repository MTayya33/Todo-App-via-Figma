function show() {
    let a = document.getElementById("pass");
    let b = document.getElementById("show");
    if (b.value == "show") {
        a.type = "text";
        b.value = "hide";
    } else {
        a.type = "password";
        b.value = "show";
    }
}