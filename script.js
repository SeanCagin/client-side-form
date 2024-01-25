function updateValidity() {
    let password = passwordInputField.value;
    let confirmPassowrd = confirmField.value;
    if (password !== confirmPassowrd) {
        passwordInputField.setCustomValidity("passwords do not match");
        confirmField.setCustomValidity("passwords do not match");
        passwordInputField.parentNode.appendChild(errorMessage);
    } else {
        passwordInputField.parentNode.removeChild(errorMessage);
        passwordInputField.setCustomValidity("");
        confirmField.setCustomValidity("");
    }
}

const passwordInputField = document.querySelector("#password");
const confirmField = document.querySelector("#confirm-password");

let errorMessage = document.createElement("div");
errorMessage.textContent = "* Passwords do not match";
errorMessage.style.color = "red";
errorMessage.style.fontFamily = `"Caveat", cursive, Arial, Helvetica, sans-serif;`;
errorMessage.style.fontSize = "1rem";
errorMessage.style.marginLeft = "";

passwordInputField.addEventListener("input", updateValidity);
confirmField.addEventListener("input", updateValidity)