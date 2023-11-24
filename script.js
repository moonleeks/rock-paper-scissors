function getComputerChoice() {
    let result = Math.floor(Math.random() * 3);
    switch (result) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    
    playerSelection = playerSelection.toLowerCase();
    console.log("Player: " + playerSelection);
    console.log("Computer: " + computerSelection);

    if (playerSelection === computerSelection) {
        return "Tied";
    }

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "You Lose! Paper beats Rock";
        } else if (computerSelection === "scissors") {
            return "You win! Rock beats Scissors";
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

const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');

btnRock.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
})

btnPaper.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
})

btnScissors.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
})

/* function game() {
    for (let i = 1; i < 6; i++) {
        let playerSelection = prompt(("Round " + i + "!"));
        let result = (playRound(playerSelection, getComputerChoice()));
        console.log(result);
    }
} */




