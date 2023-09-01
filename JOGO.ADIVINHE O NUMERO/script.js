// Gerar um número aleatório entre 1 e 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const message = document.getElementById("message");

let attempts = 0;

guessButton.addEventListener("click", function () {
    const userGuess = parseInt(guessInput.value);
    attempts++;

    if (userGuess === randomNumber) {
        message.textContent = `Parabéns! Você adivinhou o número em ${attempts} tentativas.`;
    } else if (userGuess < randomNumber) {
        message.textContent = "Tente um número maior.";
    } else {
        message.textContent = "Tente um número menor.";
    }
});
