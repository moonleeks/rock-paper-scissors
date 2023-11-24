const buttons = document.querySelectorAll('button.playButton');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        clickPlay(button.id);
    });
});

const result = document.querySelector('#results')
const match = document.querySelector('#match')

let playerWins = 0;
let computerWins = 0;

function clickPlay(choice) {
    result.textContent = playRound(choice, getComputerChoice());

    if (playerWins == 5) {
        match.textContent = "Player wins the match";
    } else if (computerWins == 5) {
        match.textContent = "Computer wins the match";
    } 
}

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

    if (playerSelection === computerSelection) {
        return "Tied";
    }

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computerWins++;
            return "You Lose! Paper beats Rock";
        } else if (computerSelection === "scissors") {
            playerWins++
            return "You win! Rock beats Scissors";
        } else {
            return "Error";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            computerWins++;
            return "You Lose! Scissors beats paper";
        } else if (computerSelection === "rock") {
            playerWins++;
            return "You win! Paper beats rock";
        } else {
            return "Error";
        }
    } else {
        if (computerSelection === "rock") {
            computerWins++;
            return "You Lose! Rock beats scissors";
        } else if (computerSelection = "paper") {
            playerWins++;
            return "You win! Scissors beats paper"
        } else {
            return "Error";
        }
    }
}

/* function game() {
    for (let i = 1; i < 6; i++) {
        let playerSelection = prompt(("Round " + i + "!"));
        let result = (playRound(playerSelection, getComputerChoice()));
        console.log(result);
    }
} */




