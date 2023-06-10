function getComputerChoice() {
    let number = Math.floor(Math.random() * 3) + 1;
    switch (number) {
        case 1:
            return 'Rock';
        case 2:
            return 'Paper';
        case 3:
            return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    let playerSelectionLowerCase = playerSelection.toLowerCase();
    let computerSelectionLowerCase = computerSelection.toLowerCase();

    if (playerSelectionLowerCase == 'rock' && computerSelectionLowerCase == 'scissors') {
        return "You win! Rock beats Scissors";
    }
    else if (playerSelectionLowerCase == 'rock' && computerSelectionLowerCase == 'paper') {
        return "You lose! Paper beats Rock";
    }
    else if (playerSelectionLowerCase == 'paper' && computerSelectionLowerCase == 'rock') {
        return "You win! Paper beats Rock";
    }
    else if (playerSelectionLowerCase == 'paper' && computerSelectionLowerCase == 'scissors') {
        return "You lose! Scissors beats Paper";
    }
    else if (playerSelectionLowerCase == 'scissors' && computerSelectionLowerCase == 'paper') {
        return "You win! Scissors beats Paper";
    }
    else if (playerSelectionLowerCase == 'scissors' && computerSelectionLowerCase == 'rock') {
        return "You lose! Rock beats Scissors";
    }
    else {
        return "Tie";
    }
}

const playerSelection = "rock";
// console.log("Player selection is " + playerSelection);
const computerSelection = getComputerChoice();
// console.log("Computer selection is " + computerSelection);
console.log(playRound(playerSelection, computerSelection));