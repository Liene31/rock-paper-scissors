const inputEl = document.getElementById("human-choice");
let computerScore = 0;
let humanScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(humanScore);
console.log(computerScore);

function playRound(humanChoice, computerChoice) {
  //If paper - rock = paper wins (h)
  //if scissors - paper = scissors wins (h)
  //If rock - scissors = rock wins (h)

  console.log(humanChoice);
  console.log(computerChoice);

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
    computerScore;
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

document.getElementById("btn").addEventListener("click", () => {
  //Redo, that all the logic works on btn click
});

playRound(humanSelection, computerSelection);
