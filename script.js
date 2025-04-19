const winSound = new Audio('right.wav');
const wrongSound = new Audio('wrong.wav');
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let maxAttempts = 5;

function checkGuess() {
    const guessInput = document.getElementById("guess");
    const message = document.getElementById("message");
    const attemptsDisplay = document.getElementById("attempts");

    const guess = Number(guessInput.value);
    attempts++;

    if (guess === secretNumber) {
        message.textContent = `🎉 You got it right in ${attempts} tries! The number was ${secretNumber}.`;
        message.style.color = "green";
        document.getElementById("guess").disabled = true;
        winSound.play();
        confetti();
    } else if (attempts >= maxAttempts) {
        message.textContent = `💔 You've used all your attempts! The number was ${secretNumber}.`;
        message.style.color = "red";
        document.getElementById("guess").disabled = true;
        wrongSound.play();
    } else if (guess < secretNumber) {
        message.textContent = "📉 Too low! Try again.";
        message.style.color = "red";
        //wrongSound.play();
    }
    else {
        message.textContent = "📈 Too high! Try again.";
        message.style.color = "red";
        //wrongSound.play();
    }
    attemptsDisplay.textContent = `Attempts: ${attempts} / ${maxAttempts}`;
    guessInput.value = "";
}

function restartGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("message").textContent = "";
    document.getElementById("message").style.color = "black";
    document.getElementById("attempts").textContent = `Attempts: 0 / ${maxAttempts}`;
    document.getElementById("guess").value = "";
    document.getElementById("guess").disabled = false;
    document.getElementById("secret").textContent = "";
    document.getElementById("hint").textContent = ""
}
