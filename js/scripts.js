function generatePassword(length = 12) {
    const charset =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

document.getElementById("generate-password").addEventListener("click", () => {
    const password = generatePassword();
    const passwordDisplay = document.getElementById("password-display");
    const generatedPasswordDiv = document.getElementById("generated-password");

    passwordDisplay.textContent = password;
    generatedPasswordDiv.style.display = "block";
});

document.getElementById("copy-password").addEventListener("click", () => {
    const password = document.getElementById("password-display").textContent;
    navigator.clipboard
        .writeText(password)
        .then(() => {
            const notification = document.getElementById("notification");
            notification.style.display = "block";
            setTimeout(() => {
                notification.style.display = "none";
            }, 3000);
        })
        .catch((err) => {
            console.error("Erro ao copiar a senha:", err);
        });
});
