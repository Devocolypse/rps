let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    // create a new integer variable for a random number & set it to a random number between 1 and 3
    let randomNum = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    // IF the variable equals 1, return "rock"
    if (randomNum === 1) {
        return "rock";
    } else if (randomNum === 2) { // IF the variable equals 2, return "paper"
        return "paper";
    } else { // IF the variable equals 3, return "scissors"
        return "scissors";
    }
}

function getHumanChoice() {
    // create new string variable "choice"
    let choice;
    // ask user "rock, paper, or scissors?" and input answer into "choice"
    choice = prompt("Rock, paper, or scissors?");
    // return choice
    return choice;
}

function playRound(humanChoice, computerChoice) {
    // convert humanChoice (HC) to lowercase
    // convert computerChoice (CC) to lowercase
    // create a new string variable called "winner"
    // IF CC equals "rock" and HC equals "scissors", input "You Lose! Rock beats scissors." into "winner" and increment score
    // IF CC equals "paper" and HC equals "rock", input "You Lose! Paper beats rock." into "winner" and increment score
    // IF CC equals "scissors" and HC equals "paper", input "You Lose! Scissors beats paper." into "winner" and increment score
    // IF CC equals "rock" and HC equals "paper", input "You Win! Paper beats rock." into "winner" and increment score
    // IF CC equals "paper" and HC equals "scissors", input "You Win! Scissors beats paper." into "winner" and increment score
    // IF CC equals "scissors" and HC equals "rock", input "You Win! Rock beats scissors." into "winner" and increment score
    // log the winner to the console
}