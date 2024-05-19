document.addEventListener("DOMContentLoaded", function () {
    const displayName = document.getElementById("displayName");
    const displayEmail = document.getElementById("displayEmail");
    const displayMessage = document.getElementById("displayMessage");

    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const message = localStorage.getItem("message");

    if (name && email && message) {
        displayName.textContent = name;
        displayEmail.textContent = email;
        displayMessage.textContent = message;
    } else {
        displayName.textContent = "Veri bulunamadı.";
        displayEmail.textContent = "Veri bulunamadı.";
        displayMessage.textContent = "Veri bulunamadı.";
    }
});