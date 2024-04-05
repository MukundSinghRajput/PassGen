const slider = document.getElementById("pass-slider")
const sliderval = document.getElementById("sliderValue")
const passBox = document.getElementById("passBox")

const lowercase = document.getElementById("lowercase")
const uppercase = document.getElementById("uppercase")
const numbers = document.getElementById("numbers")
const symbols = document.getElementById("symbols")

// Buttons
const copyBtn = document.getElementById("copyBTN")
const generateBtn = document.getElementById("genPass")

// Vars 

const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numberss = "0123456789"
const symbolss = "~`!@#$%^&*()_-+={[]}':><\".,?/*"

// Default
sliderval.textContent = slider.value;

slider.addEventListener("input", () => {
    sliderval.textContent = slider.value;
    generatePassword();
})

function generatePassword() {
    const len = slider.value;
    let charaters = "";
    let pass = "";

    charaters += lowercase.checked ? lowercaseLetters : "";
    charaters += uppercase.checked ? uppercaseLetters : "";
    charaters += numbers.checked ? numberss : "";
    charaters += symbols.checked ? symbolss : "";
    for (let i = 0; i < len; i++) {
        pass += charaters.charAt(Math.floor(Math.random() * charaters.length));
    }
    passBox.value = pass;
}

generateBtn.addEventListener("click", () => {
    generatePassword();
})

copyBtn.addEventListener("click", () => {
    
    if (passBox.value != "" || passBox.value.length >= 1) {
        navigator.clipboard.writeText(passBox.value)
        copyBtn.innerText = "check"

        setTimeout(() => {
            copyBtn.innerHTML = "content_copy";
        }, 3000);
    }
})