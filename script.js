"use strict";

function getComputerChoice() {
  const index = Math.floor(Math.random() * 3);
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[index];
}

const playerSelection = "rock";

function playRound(playerSelection, computerSelection) {
  const normalizedPlayerSelection =
    playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

  if (normalizedPlayerSelection === computerSelection) {
    return "It's a tie!";
  }

  switch (normalizedPlayerSelection) {
    case "Rock":
      return computerSelection === "Scissors"
        ? "You win! Rock beats Scissors"
        : "You lose! Paper beats Rock";
    case "Paper":
      return computerSelection === "Rock"
        ? "You win! Paper beats Rock"
        : "You lose! Scissors beats Paper";
    case "Scissors":
      return computerSelection === "Paper"
        ? "You win! Scissors beats Paper"
        : "You lose! Rock beats Scissors";
    default:
      return 'Invalid input. Please choose either "Rock", "paper", or "scissors".';
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Select your option:");
    const computerSelection = getComputerChoice();
    console.log(`Player chooses: ${playerSelection}`);
    console.log(`Computer chooses: ${computerSelection}`);
    console.log(playRound(playerSelection, computerSelection));
  }
}
playGame();
