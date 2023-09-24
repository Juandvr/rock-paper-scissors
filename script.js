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


const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        return "Tie";
    }

    if (computerSelection == "rock") {
        if (playerSelection == "paper") {
            return "You won! Paper beats Rock";
        } else if (playerSelection == "scissors") {
            return "You lose! Rock beats Scissors";
        }
    }
    if (computerSelection == "paper") {
        if (playerSelection == "rock") {
            return "You lose! Paper beats Rock";
        } else if (playerSelection == "scissors") {
            return "You won! Scissors beats Paper";
        }
    }
    if (computerSelection == "scissors") {
        if (playerSelection == "paper") {
            return "You lose! Scissors beats Paper";
        } else if (playerSelection == "rock") {
            return "You won! Rock beats Scissors";
        }
    }
}