let humanScore = 0;
let computerScore = 0;
let round = 0;
let firstToRounds = 0;

// RPS button event listeners
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const playRoundsBtn = document.querySelector('.playRounds');
const choices = document.querySelector('.choices');
const verdict = document.querySelector('.verdict');
const score = document.querySelector('.score');
const gameInfo = document.querySelector('.gameInfo');

rockBtn.addEventListener("click", () => playRound('rock'));
paperBtn.addEventListener("click", () => playRound('paper'));
scissorsBtn.addEventListener("click", () => playRound('scissors'));
playRoundsBtn.addEventListener("click", () => playGame());

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

function reportRound(humanChoice, computerChoice, winner) {
    const currentRound = document.querySelector('.currentRound');
    
    choices.textContent = `You chose ${humanChoice}. The Computer chose ${computerChoice}.`;
    verdict.textContent = winner;
    score.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
    currentRound.textContent = `Round ${round}`;
}

function reportWinner(winner) {
    const winTag = document.createElement('p');
    winTag.classList.add('winTag');
    winTag.textContent = `${winner} won the game!`;

    gameInfo.appendChild(winTag);
}

function playRound(humanChoice, computerChoice = getComputerChoice()) {
    // convert humanChoice (HC) to lowercase
    humanChoice = humanChoice.toLowerCase();
    // convert computerChoice (CC) to lowercase
    computerChoice = computerChoice.toLowerCase();
    // create a new string variable called "winner"
    let winner;

    // IF CC equals "rock" and HC equals "scissors", input "You Lose! Rock beats scissors." into "winner" and increment score
    if (computerChoice === "rock" && humanChoice === "scissors") {
        winner = "You Lose! Rock beats scissors.";
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

    if (humanScore >= firstToRounds) {
        reportRound(humanChoice, computerChoice, winner);
        reportWinner('You');
    } else if (computerScore >= firstToRounds) {
        reportRound(humanChoice, computerChoice, winner);
        reportWinner('The Computer');
    } else {
        round++;
        reportRound(humanChoice, computerChoice, winner);
    }

}

function playGame() {
    const roundsInput = document.querySelector('#roundsInput');
    const checkRoundsInput = parseInt(roundsInput.value);

    if (isNaN(checkRoundsInput)) {
        alert('You must enter a whole number only (no playing 1.25 rounds!)')
        roundsInput.value = '';
        roundsInput.focus();
    } else {
        // show buttons
        rockBtn.hidden = false;
        paperBtn.hidden = false;
        scissorsBtn.hidden = false;

        // replace input for setting # of rounds with a round tracker
        firstToRounds = checkRoundsInput;
        const roundsContainer = document.querySelector('.roundsContainer');
        const currentRound = document.createElement('div');
        currentRound.classList.add('currentRound');

        round++;
        currentRound.textContent = `Round ${round}`;

        roundsContainer.replaceWith(currentRound);
    }
}