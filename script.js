function getComputerChoice() {
    let computerChoice;
    let randomNumber = Math.ceil(Math.random()*3);

    randomNumber == 1 ? computerChoice = "Rock" : randomNumber == 2 ? computerChoice = "Paper" : computerChoice = "Scissors";

    return computerChoice;
}

let playerScore = 0;
let cpuScore = 0;

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    const log = document.getElementById("log");
    const message = document.createElement("p");

    log.innerHTML = "";

    const playerChoice = document.getElementById("playerChoice");
    const cpuChoice = document.getElementById("cpuChoice");

    playerSelection == "rock" ? playerChoice.innerHTML = "&#128074;" : playerSelection == "paper" ? playerChoice.innerHTML = "&#129306;" : playerChoice.innerHTML = "&#9996;"; 
    computerSelection == "rock" ? cpuChoice.innerHTML = "&#128074;" : computerSelection == "paper" ? cpuChoice.innerHTML = "&#129306;" : cpuChoice.innerHTML = "&#9996;"; 

    if (playerSelection == computerSelection) {
        message.textContent = "Tie";
        log.appendChild(message);
    }

    if (computerSelection == "rock") {
        if (playerSelection == "paper") {
            message.textContent = `Player + 1`;
            log.appendChild(message);
            playerScore++;
        } else if (playerSelection == "scissors") {
            message.textContent = `CPU + 1`;
            log.appendChild(message);
            cpuScore++;
        }
    }
    if (computerSelection == "paper") {
        if (playerSelection == "rock") {
            message.textContent = `CPU + 1`;
            log.appendChild(message);
            cpuScore++;
        } else if (playerSelection == "scissors") {
            message.textContent = `Player + 1`;
            log.appendChild(message);
            playerScore++;
        }
    }
    if (computerSelection == "scissors") {
        if (playerSelection == "paper") {
            message.textContent = ` CPU + 1`;
            log.appendChild(message);
            cpuScore++;
        } else if (playerSelection == "rock") {
            message.textContent = `Player + 1`;
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