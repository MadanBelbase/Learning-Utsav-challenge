function createpassword() {
    // Define possible characters for the password
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = "";
    
    // Set password length (you can adjust it as needed)
    const passwordLength = 12;

    // Generate random characters for the password
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    // Display generated password in the input field
    document.getElementById("password").value = password;
}

// Copy password to clipboard when copy icon is clicked
document.querySelector(".display img").addEventListener("click", function () {
    const passwordField = document.getElementById("password");
    passwordField.select();
    passwordField.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(passwordField.value)
        .then(() => alert("Password copied to clipboard!"))
        .catch(() => alert("Failed to copy password."));
});
