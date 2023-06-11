let playerScore = 0;
let computerScore = 0;

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
        playerScore++;
        return "Win";
    }
    else if (playerSelectionLowerCase == 'rock' && computerSelectionLowerCase == 'paper') {
        computerScore++;
        return "Loss";
    }
    else if (playerSelectionLowerCase == 'paper' && computerSelectionLowerCase == 'rock') {
        playerScore++;
        return "Win";
    }
    else if (playerSelectionLowerCase == 'paper' && computerSelectionLowerCase == 'scissors') {
        computerScore++;
        return "Loss";
    }
    else if (playerSelectionLowerCase == 'scissors' && computerSelectionLowerCase == 'paper') {
        playerScore++;
        return "Win";
    }
    else if (playerSelectionLowerCase == 'scissors' && computerSelectionLowerCase == 'rock') {
        computerScore++;
        return "Loss";
    }
    else {
        return "Tie";
    }
}

function game() {
    // let playerScore = 0;
    // let computerScore = 0;

    // First game
    let playerSelection = prompt("Enter a choice");
    console.log("You picked " + playerSelection);

    let computerSelection = getComputerChoice();
    console.log("Computer picked " + computerSelection);

    console.log(playRound(playerSelection, computerSelection));
    console.log("Player score: " + playerScore);
    console.log("Computer score: " + computerScore);

    // Second game
    playerSelection = prompt("Enter a choice");
    console.log("You picked " + playerSelection);

    computerSelection = getComputerChoice();
    console.log("Computer picked " + computerSelection);

    console.log(playRound(playerSelection, computerSelection));
    console.log("Player score: " + playerScore);
    console.log("Computer score: " + computerScore);

    // Third game
    playerSelection = prompt("Enter a choice");
    console.log("You picked " + playerSelection);

    computerSelection = getComputerChoice();
    console.log("Computer picked " + computerSelection);

    console.log(playRound(playerSelection, computerSelection));
    console.log("Player score: " + playerScore);
    console.log("Computer score: " + computerScore);

    // Fourth game
    playerSelection = prompt("Enter a choice");
    console.log("You picked " + playerSelection);

    computerSelection = getComputerChoice();
    console.log("Computer picked " + computerSelection);

    console.log(playRound(playerSelection, computerSelection));
    console.log("Player score: " + playerScore);
    console.log("Computer score: " + computerScore);

    // Fifth game
    playerSelection = prompt("Enter a choice");
    console.log("You picked " + playerSelection);

    computerSelection = getComputerChoice();
    console.log("Computer picked " + computerSelection);

    console.log(playRound(playerSelection, computerSelection));
    console.log("Player score: " + playerScore);
    console.log("Computer score: " + computerScore);

    // Winner, Loser or Tie:

    if (playerScore > computerScore) {
        console.log("Player wins");
    }
    else if (playerScore < computerScore) {
        console.log("Computer wins");
    }
    else {
        console.log("Tie");
    }

    // Reset scores by resetting global variables:

    playerScore = 0;
    computerScore = 0;
}