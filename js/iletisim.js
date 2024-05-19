document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const submitBtn = document.getElementById("submitBtn");
    const resetBtn = document.getElementById("resetBtn");

    submitBtn.addEventListener("click", function (event) {
        event.preventDefault();
        if (validateForm()) {
            alert("Form başarıyla gönderildi!");
            form.reset();
        }
    });

    resetBtn.addEventListener("click", function () {
        form.reset();
    });

    function validateForm() {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (!name || !email || !message) {
            alert("Lütfen tüm alanları doldurunuz.");
            return false;
        }

        if (!validateEmail(email)) {
            alert("Geçerli bir email adresi giriniz.");
            return false;
        }

        return true;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});