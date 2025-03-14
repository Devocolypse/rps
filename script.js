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

function playRound(humanChoice, computerChoice, round = 1) {
    // convert humanChoice (HC) to lowercase
    humanChoice = humanChoice.toLowerCase();
    // convert computerChoice (CC) to lowercase
    computerChoice = computerChoice.toLowerCase();
    // create a new string variable called "winner"
    let winner;

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

    console.groupCollapsed(`Round ${round}`)
    console.log("Computer has chosen " + computerChoice)
    console.log("Player has chosen " + humanChoice)
    console.log(`Computer: ${computerScore} | You: ${humanScore}`);
    console.groupEnd(`Round ${round}`)
    
    console.log(winner);
}

function playGame(rounds = 1) {
    // create a counter variable, set to 0
    let i = 0;

    // WHILE the counter is less than "rounds", increment counter by 1
    while (i < rounds) {
        // create a new string variable that stores the human's choice
        const humanSelection = getHumanChoice();
        // create a new string variable that stores the computer's choice
        const computerSelection = getComputerChoice();
        // call playRound() and pass it both player's choices as well as the current round
        playRound(humanSelection, computerSelection, i + 1);

        i++
    }

    // IF the human has a higher score after however many rounds, declare them the winner
    if (humanScore > computerScore) {
        console.log("Hell yeah, you won the game!")
    } else if (computerScore > humanScore) {
        // ELSE IF the computer got the upper hand, declare it the winner
        console.log("Drat, you lost the game!")
    } else {
        // ELSE declare the game a draw
        console.log("It's a draw! That's somewhat underwhelming.")
    }

    // report the final score
    console.log(
        `
    Final score
    -----------
    You: ${humanScore}
    CPU: ${computerScore}

    -----------
    # of Rounds: ${rounds}
    -----------
    `
    )
}