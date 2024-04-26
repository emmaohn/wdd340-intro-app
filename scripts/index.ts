
let rock: HTMLElement = document.getElementById("rock");
let paper: HTMLElement = document.getElementById("paper");
let scissors: HTMLElement = document.getElementById("scissors");

// initialize variables
let wins: number = 0;
let losses: number = 0;
let draws: number = 0;
let count: number = 0;

let win: boolean = false;
let loss: boolean = false;
let draw: boolean = false;

// initialize arrays
let items : string[] = ["Rock", "Paper", "Scissors"];

// add event listeners to each button
rock.addEventListener("click", () => determineChoice(0));
paper.addEventListener("click", () => determineChoice(1));
scissors.addEventListener("click", () => determineChoice(2));

// let computer randomly select a number
let getComputerChoice = () => {
  return Math.floor(Math.random() * 3);
};

// determine user and computer choice and evaluate
let determineChoice = (item : number) => {
  // get computer choice
  let compChoice : number = getComputerChoice();
  // determine outcome
  if (
    (compChoice == 0 && item == 1) ||
    (compChoice == 1 && item == 2) ||
    (compChoice == 2 && item == 0)
  ) {
    win = true;
    loss = false;
    draw = false;
    wins++;
    count++;
  } else if (
    (compChoice == 0 && item == 2) ||
    (compChoice == 2 && item == 1) ||
    (compChoice == 1 && item == 0)
  ) {
    win = false;
    loss = true;
    draw = false;
    losses++;
    count++;
  } else {
    win = false;
    loss = false;
    draw = true;
    draws++;
    count++;
  }

  // display computer choice
  document.querySelector("#compChoice").textContent = items[compChoice];

  // display wins, losses and draws
  document.querySelector("#wins").textContent = String(wins);
  document.querySelector("#losses").textContent = String(losses);
  document.querySelector("#draws").textContent = String(draws);

  // console.log(wins, losses, draws, compChoice, item);
};
