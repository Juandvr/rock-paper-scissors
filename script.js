function getComputerChoice() {
    let computerChoice;
    let randomNumber = Math.ceil(Math.random()*3);

    if (randomNumber == 1) {
        computerChoice = "Rock";
    } else if (randomNumber == 2) {
        computerChoice = "Paper";
    } else if (randomNumber == 3) {
        computerChoice = "Scissors";
    }

    return computerChoice;
}

let playerScore = 0;
let cpuScore = 0;

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    const log = document.getElementById("log");
    const message = document.createElement("p");

    if (playerSelection == computerSelection) {
        message.textContent = "Tie";
        log.appendChild(message);
    }

    if (computerSelection == "rock") {
        if (playerSelection == "paper") {
            message.textContent = `Player +1 - Player: ${playerSelection} - CPU: ${computerSelection}`;
            log.appendChild(message);
            playerScore++;
        } else if (playerSelection == "scissors") {
            message.textContent = `CPU +1 - Player: ${playerSelection} - CPU: ${computerSelection}`;
            log.appendChild(message);
            cpuScore++;
        }
    }
    if (computerSelection == "paper") {
        if (playerSelection == "rock") {
            message.textContent = `CPU +1 - Player: ${playerSelection} - CPU: ${computerSelection}`;
            log.appendChild(message);
            cpuScore++;
        } else if (playerSelection == "scissors") {
            message.textContent = `Player +1 - Player: ${playerSelection} - CPU: ${computerSelection}`;
            log.appendChild(message);
            playerScore++;
        }
    }
    if (computerSelection == "scissors") {
        if (playerSelection == "paper") {
            message.textContent = ` CPU +1 - Player: ${playerSelection} - CPU: ${computerSelection}`;
            log.appendChild(message);
            cpuScore++;
        } else if (playerSelection == "rock") {
            message.textContent = `Player +1 - Player: ${playerSelection} - CPU: ${computerSelection}`;
            log.appendChild(message);
            playerScore++;
        }
    }

    if (playerScore == 5) {
        message.textContent = "You Won!";
    }
    if (cpuScore == 5) {
        message.textContent = "You Lose!";
    }

    const playerPoints = document.getElementById("playerPoints");
    const cpuPoints = document.getElementById("cpuPoints");

    playerPoints.textContent = playerScore;
    cpuPoints.textContent = cpuScore;
} 

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));