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
        return "You Win";
    }
    else if (playerSelectionLowerCase == 'rock' && computerSelectionLowerCase == 'paper') {
        computerScore++;
        return "You Lose";
    }
    else if (playerSelectionLowerCase == 'paper' && computerSelectionLowerCase == 'rock') {
        playerScore++;
        return "You Win";
    }
    else if (playerSelectionLowerCase == 'paper' && computerSelectionLowerCase == 'scissors') {
        computerScore++;
        return "You Lose";
    }
    else if (playerSelectionLowerCase == 'scissors' && computerSelectionLowerCase == 'paper') {
        playerScore++;
        return "You Win";
    }
    else if (playerSelectionLowerCase == 'scissors' && computerSelectionLowerCase == 'rock') {
        computerScore++;
        return "You Lose";
    }
    else {
        return "Tie";
    }
}

function rockSelection() {
    playerSelection = "Rock";
    let computerSelection = getComputerChoice();
    div.textContent = ("You picked " + playerSelection + " and Computer picked " + computerSelection + ", ")
        + playRound(playerSelection, computerSelection) + (", Player score is "
            + playerScore + " Computer score is " + computerScore);

    if (playerScore > 4) {
        div.textContent = ("You picked " + playerSelection + " and Computer picked " + computerSelection + ", " +
            " Player score is " + playerScore + " Computer score is " + computerScore + " Player wins!");
        playerScore = 0;
        computerScore = 0;
    }
    else if (computerScore > 4) {
        div.textContent = ("You picked " + playerSelection + " and Computer picked " + computerSelection + ", "
            + " Player score is " + playerScore + " Computer score is " + computerScore + " Computer wins!");
        playerScore = 0;
        computerScore = 0;
    }
}
rock.addEventListener('click', rockSelection);

function paperSelection() {
    playerSelection = "Paper";
    let computerSelection = getComputerChoice();
    div.textContent = ("You picked " + playerSelection + " and Computer picked " + computerSelection + ", ")
        + playRound(playerSelection, computerSelection) + (", Player score is "
            + playerScore + " Computer score is " + computerScore);

    if (playerScore > 4) {
        div.textContent = ("You picked " + playerSelection + " and Computer picked " + computerSelection + ", " +
            " Player score is " + playerScore + " Computer score is " + computerScore + " Player wins!");
        playerScore = 0;
        computerScore = 0;
    }
    else if (computerScore > 4) {
        div.textContent = ("You picked " + playerSelection + " and Computer picked " + computerSelection + ", "
            + " Player score is " + playerScore + " Computer score is " + computerScore + " Computer wins!");
        playerScore = 0;
        computerScore = 0;
    }
}
paper.addEventListener('click', paperSelection);

function scissorsSelection() {
    playerSelection = "Scissors";
    let computerSelection = getComputerChoice();
    div.textContent = ("You picked " + playerSelection + " and Computer picked " + computerSelection + ", ")
        + playRound(playerSelection, computerSelection) + (", Player score is "
            + playerScore + " Computer score is " + computerScore);

    if (playerScore > 4) {
        div.textContent = ("You picked " + playerSelection + " and Computer picked " + computerSelection + ", " +
            " Player score is " + playerScore + " Computer score is " + computerScore + " Player wins!");
        playerScore = 0;
        computerScore = 0;
    }
    else if (computerScore > 4) {
        div.textContent = ("You picked " + playerSelection + " and Computer picked " + computerSelection + ", "
            + " Player score is " + playerScore + " Computer score is " + computerScore + " Computer wins!");
        playerScore = 0;
        computerScore = 0;
    }
}
scissors.addEventListener('click', scissorsSelection);

// function scoreReset() {
//     if (playerScore == 5) {
//         div.textContent = "Player wins";
//         playerScore = 0;
//         computerScore = 0;
//     }
//     else if (computerScore == 5) {
//         div.textContent = "Computer wins";
//         playerScore = 0;
//         computerScore = 0;
//     }
// }

// function game() {
//     // let playerScore = 0;
//     // let computerScore = 0;

//     // First game
//     let playerSelection = prompt("Enter a choice");
//     console.log("You picked " + playerSelection);

//     let computerSelection = getComputerChoice();
//     console.log("Computer picked " + computerSelection);

//     console.log(playRound(playerSelection, computerSelection));
//     console.log("Player score: " + playerScore);
//     console.log("Computer score: " + computerScore);

//     // Second game
//     playerSelection = prompt("Enter a choice");
//     console.log("You picked " + playerSelection);

//     computerSelection = getComputerChoice();
//     console.log("Computer picked " + computerSelection);

//     console.log(playRound(playerSelection, computerSelection));
//     console.log("Player score: " + playerScore);
//     console.log("Computer score: " + computerScore);

//     // Third game
//     playerSelection = prompt("Enter a choice");
//     console.log("You picked " + playerSelection);

//     computerSelection = getComputerChoice();
//     console.log("Computer picked " + computerSelection);

//     console.log(playRound(playerSelection, computerSelection));
//     console.log("Player score: " + playerScore);
//     console.log("Computer score: " + computerScore);

//     // Fourth game
//     playerSelection = prompt("Enter a choice");
//     console.log("You picked " + playerSelection);

//     computerSelection = getComputerChoice();
//     console.log("Computer picked " + computerSelection);

//     console.log(playRound(playerSelection, computerSelection));
//     console.log("Player score: " + playerScore);
//     console.log("Computer score: " + computerScore);

//     // Fifth game
//     playerSelection = prompt("Enter a choice");
//     console.log("You picked " + playerSelection);

//     computerSelection = getComputerChoice();
//     console.log("Computer picked " + computerSelection);

//     console.log(playRound(playerSelection, computerSelection));
//     console.log("Player score: " + playerScore);
//     console.log("Computer score: " + computerScore);

//     // Winner, Loser or Tie:

//     if (playerScore > computerScore) {
//         console.log("Player wins");
//     }
//     else if (playerScore < computerScore) {
//         console.log("Computer wins");
//     }
//     else {
//         console.log("Tie");
//     }

//     // Reset scores by resetting global variables:

//     playerScore = 0;
//     computerScore = 0;
// }