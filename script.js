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