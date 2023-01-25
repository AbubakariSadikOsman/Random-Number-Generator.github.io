const number = document.getElementById("number");
const generateButton = document.querySelector(".generate");

const generateNumber = () => {
    const randomNumber = (Math.random() * 100) + 1;
    number.innerHTML = Math.floor(randomNumber);
    number.style.color = "gold";
}

generateButton.addEventListener("click", generateNumber);

