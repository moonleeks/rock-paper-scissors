function getComputerChoice() {
    let result;
    result = "rock";
    return result;
}

function playRound(playerSelection, computerSelection) {
    
    playerSelection = playerSelection.toLower();

    if (playerSelection === computerSelection) {
        return "Tied";
    }

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "You Lose! Paper beats Rock";
        } else if (computerSelection === "scissors") {
            return "You win! Scissors beats Rock";
        } else {
            return "Error";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return "You Lose! Scissors beats paper";
        } else if (computerSelection === "rock") {
            return "You win! Paper beats rock";
        } else {
            return "Error";
        }
    } else {
        if (computerSelection === "rock") {
            return "You Lose! Rock beats scissors";
        } else if (computerSelection = "paper") {
            return "You win! Scissors beats paper"
        } else {
            return "Error";
        }
    }
}

console.log(getComputerChoice());

