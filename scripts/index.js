var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
// initialize variables
var wins = 0;
var losses = 0;
var draws = 0;
var count = 0;
var win = false;
var loss = false;
var draw = false;
// initialize arrays
var items = ["Rock", "Paper", "Scissors"];
// add event listeners to each button
rock.addEventListener("click", function () { return determineChoice(0); });
paper.addEventListener("click", function () { return determineChoice(1); });
scissors.addEventListener("click", function () { return determineChoice(2); });
// let computer randomly select a number
var getComputerChoice = function () {
    return Math.floor(Math.random() * 3);
};
// determine user and computer choice and evaluate
var determineChoice = function (item) {
    // get computer choice
    var compChoice = getComputerChoice();
    // determine outcome
    if ((compChoice == 0 && item == 1) ||
        (compChoice == 1 && item == 2) ||
        (compChoice == 2 && item == 0)) {
        win = true;
        loss = false;
        draw = false;
        wins++;
        count++;
    }
    else if ((compChoice == 0 && item == 2) ||
        (compChoice == 2 && item == 1) ||
        (compChoice == 1 && item == 0)) {
        win = false;
        loss = true;
        draw = false;
        losses++;
        count++;
    }
    else {
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
