// Rock - Paper - Scissors Game

const choices = ["rock", "paper", "scissors"];

const choiceRock = document.querySelector(".choiceRock");
const choicePaper = document.querySelector(".choicePaper");
const choiceScissors = document.querySelector(".choiceScissors");

const playerDisplay = document.querySelector(".playerDisplay");
const computerDisplay = document.querySelector(".computerDisplay");
const resultDisplay = document.querySelector(".resultDisplay");

const playerScoreDisplay = document.querySelector(".playerScoreDisplay");
const computerScoreDisplay = document.querySelector(".computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice) {
        result = "IT´S A TIE!"
    } else {
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOOSE!"
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOOSE!"
                break;   
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOOSE!"
                break;
        }
    }
    
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore
            break;
        case "YOU LOOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore
            break;
    }
};

choiceRock.addEventListener("click", () => {
    playGame("rock");
});
choicePaper.addEventListener("click", () => {
    playGame("paper");
});
choiceScissors.addEventListener("click", () => {
    playGame("scissors");
});