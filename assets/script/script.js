const form = document.querySelector(".form-control");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (email === "admin@gmail.com" && password === "admin123") {
        window.location.href = "homepage.html";
        return;
    }
    // show alert bellow the form with red color
    const alert = document.createElement("div");
    alert.classList.add("alert");
    alert.style.color = "red";
    alert.style.border = "1px solid red";
    alert.style.padding = "10px";
    alert.style.margin = "10px 0";
    alert.innerHTML = "Email or password is wrong";
    form.appendChild(alert);
    setTimeout(() => {
        alert.remove();
    }, 3000);
});
