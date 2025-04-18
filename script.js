let secretNumber = Math.floor(Math.ramdom() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guessInput = document.getElementById("guess");
    const message = document.getElementById("message");
    const attemptsDisplay = document.getElementById("attempts");

    const guess = Number(guessInput.value);
    attempts++;

    if (guess === secretNumber) {
        message.textContent = `🎉 You got it right in ${attempts} tries! The number was ${secretNumber}.`;
        message.style.color = "green";
    } else if (guess < secretNumber) {
        message.textContent = "📉 Too low! Try again.";
        message.style.color = "red";
    }
    else {
        message.textContent = "📈 Too high! Try again.";
        message.style.color = "red";
    }
    attemptsDisplay.textContent = `Attempts: ${attempts}`;
    guessInput.value = "";
}

function resetGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("message").textContent = "";
    document.getElementById("attempts").textContent = "Attempts: 0";
    document.getElementById("guess").value = "";
}