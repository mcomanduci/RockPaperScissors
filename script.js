"use strict";

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const results = document.querySelector(".results");
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const index = Math.floor(Math.random() * 3);
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[index];
}

function playRound(playerSelection, computerSelection) {
  const normalizedPlayerSelection =
    playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

  if (normalizedPlayerSelection === computerSelection) {
    return "It's a tie!";
  }

  let result;
  switch (normalizedPlayerSelection) {
    case "Rock":
      if (computerSelection === "Scissors") {
        playerScore++;
        result = "You win! Rock beats Scissors";
      } else {
        computerScore++;
        result = "You lose! Paper beats Rock";
      }
      break;
    case "Paper":
      if (computerSelection === "Rock") {
        playerScore++;
        result = "You win! Paper beats Rock";
      } else {
        computerScore++;
        result = "You lose! Scissors beats Paper";
      }
      break;
    case "Scissors":
      if (computerSelection === "Paper") {
        playerScore++;
        result = "You win! Scissors beats Paper";
      } else {
        computerScore++;
        result = "You lose! Rock beats Scissors";
      }
      break;
    default:
      result =
        'Invalid input. Please choose either "Rock", "paper", or "scissors".';
  }
  return result;
}

function playGame(playerSelection) {
  let gameResult;
  const computerSelection = getComputerChoice();
  const roundResult = playRound(playerSelection, computerSelection);
  if (playerScore === 5) {
    gameResult = `You Win!`;
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    gameResult = `Computer Wins!`;
    playerScore = 0;
    computerScore = 0;
  } else {
    gameResult = `Player chooses: ${playerSelection}
          Computer chooses: ${computerSelection}
          ${roundResult}
          Player: ${playerScore}
          Computer: ${computerScore}`;
  }
  return gameResult;
}

rockBtn.addEventListener("click", () => {
  results.innerText = playGame("Rock");
});
paperBtn.addEventListener("click", () => {
  results.innerText = playGame("Paper");
});
scissorsBtn.addEventListener("click", () => {
  results.innerText = playGame("Scissors");
});
