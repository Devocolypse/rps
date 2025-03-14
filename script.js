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
    humanChoice = humanChoice.toLowerCase();
    // convert computerChoice (CC) to lowercase
    computerChoice = computerChoice.toLowerCase();
    // create a new string variable called "winner"
    let winner;

    console.log("Computer has chosen " + computerChoice)
    console.log("Player has chosen " + humanChoice)

    // IF CC equals "rock" and HC equals "scissors", input "You Lose! Rock beats scissors." into "winner" and increment score
    if (computerChoice === "rock" && humanChoice === "scissors") {
        winner = "You Lose! Rock beats scissors";
        computerScore++;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        // IF CC equals "paper" and HC equals "rock", input "You Lose! Paper beats rock." into "winner" and increment score
        winner = "You Lose! Paper beats rock.";
        computerScore++;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        // IF CC equals "scissors" and HC equals "paper", input "You Lose! Scissors beats paper." into "winner" and increment score
        winner = "You Lose! Scissors beats paper.";
        computerScore++;
    } else if (computerChoice === "rock" && humanChoice === "paper") {
        // IF CC equals "rock" and HC equals "paper", input "You Win! Paper beats rock." into "winner" and increment score
        winner = "You Win! Paper beats rock."
        humanScore++;
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        // IF CC equals "paper" and HC equals "scissors", input "You Win! Scissors beats paper." into "winner" and increment score
        winner = "You win! Scissors beats papers."
        humanScore++;
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        // IF CC equals "scissors" and HC equals "rock", input "You Win! Rock beats scissors." into "winner" and increment score
        winner = "You win! Rock beats scissors.";
        humanScore++;
    } else {
        // ELSE it is a tie, input "It's a tie!"
        winner = "It's a tie!";
    }

    console.log(winner);
    console.log(`Computer: ${computerScore} | You: ${humanScore}`);
}

function playGame(rounds) {
    // create a counter variable, set to 0
    // WHILE the counter is less than "rounds", increment counter by 1
        // create a new string variable that stores the human's choice
        // create a new string variable that stores the computer's choice
        // call playRound() and pass it both player's choices
    // IF the human has a higher score after however many rounds, declare them the winner
    // ELSE IF the computer got the upper hand, declare it the winner
    // ELSE declare the game a draw
    // report the final score
}