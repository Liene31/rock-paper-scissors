const inputEl = document.getElementById("human-choice");

let computerScore = 0;
let humanScore = 0;
let round = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("even");
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    console.log("human wins");
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    console.log("human wins");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    console.log("human wins");
  } else {
    computerScore++;
    console.log("computer wins");
  }
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 3) + 1;
}

function getComputerChoice() {
  const randomNumber = generateRandomNumber();

  switch (randomNumber) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
    default:
      console.log("Not a number from 1 - 3");
  }
}

function getHumanChoice() {
  const humanChoice = inputEl.value;
  return humanChoice.toLowerCase();
}

function displayScore() {
  const humanScorePara = document.getElementById("human-score");
  const computerScorePara = document.getElementById("computer-score");

  humanScorePara.textContent = `Human score: ${humanScore}`;
  computerScorePara.textContent = `Computer score: ${computerScore}`;
}

function displayRound() {
  const roundEl = document.getElementById("rounds");
  roundEl.textContent = `Round: ${round}`;
}

function displayGameFinished() {
  const gameFinishedEl = document.getElementById("game-finished");
  gameFinishedEl.textContent = "GAME FINISHED";
}

document.getElementById("btn").addEventListener("click", () => {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection);
  round++;

  if (round <= 4) {
    displayRound();
    displayScore();
  } else {
    displayRound();
    displayGameFinished();
  }
});
