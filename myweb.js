let userScore = 0;
let computerScore = 0;
const winningScore = 3;

function startGame() {
    const username = document.getElementById("username").value.trim();
    if (username === "") {
        alert("Будь ласка, введіть ваше ім'я.");
        return;
    }

    document.getElementById("usernameDisplay").innerText = username;
    document.getElementById("gameArea").style.display = "block";
    document.querySelector(".input-container").style.display = "none";
}

function playRound() {
    const userNumber = Math.floor(Math.random() * 100) + 1;
    const computerNumber = Math.floor(Math.random() * 100) + 1;

    document.getElementById("userNumber").innerText = userNumber;
    document.getElementById("computerNumber").innerText = computerNumber;

    let resultMessage;

    if (userNumber > computerNumber) {
        userScore++;
        resultMessage = "Ви виграли цей раунд!";
    } else if (userNumber < computerNumber) {
        computerScore++;
        resultMessage = "Комп'ютер виграв цей раунд.";
    } else {
        resultMessage = "Цей раунд закінчився внічию.";
    }

    updateScoreBoard();
    document.getElementById("result").innerText = resultMessage;

    if (userScore === winningScore || computerScore === winningScore) {
        declareWinner();
    }
}

function updateScoreBoard() {
    document.getElementById("userScore").innerText = userScore;
    document.getElementById("computerScore").innerText = computerScore;
}

function declareWinner() {
    const resultDiv = document.getElementById("result");
    if (userScore === winningScore) {
        resultDiv.innerText = "Ви виграли гру!";
    } else {
        resultDiv.innerText = "Комп'ютер виграв гру.";
    }

    document.querySelector("button[onclick='playRound()']").disabled = true;
    const playAgainButton = document.createElement("button");
    playAgainButton.textContent = "Грати знову";
    playAgainButton.onclick = () => location.reload();
    document.querySelector(".container").appendChild(playAgainButton);
}
