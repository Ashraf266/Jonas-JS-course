"use strict";

const message = document.querySelector(".message");
const number = document.querySelector(".number");
const score = document.querySelector(".score");
const input = document.querySelector(".guess");
const checkButton = document.querySelector(".check");
const againButton = document.querySelector(".again");
const highScore = document.querySelector(".highscore");

let currentScore = 20;
let secretNumber = generateNewNumber();
let currenthighScore = Number(localStorage.getItem("highScore"));
highScore.textContent = currenthighScore;

checkButton.addEventListener("click", check);
againButton.addEventListener("click", resetGame);

function check() {
  let guess = input.value;

  if (!guess) {
    message.textContent = "No number!";
    return;
  }

  guess = Number(guess);

  if (guess === secretNumber) {
    correctAnswer();
  } else if (guess > secretNumber) {
    message.textContent = "Too high!";
    decreaseScore();
  } else {
    message.textContent = "Too low!";
    decreaseScore();
  }
}

function decreaseScore() {
  currentScore--;
  if (currentScore > 0) {
    score.textContent = currentScore;
  } else {
    score.textContent = 0;
    message.textContent = "You lost the game";
  }
}

function correctAnswer() {
  message.textContent = "Correct number!!";
  document.body.style.backgroundColor = "#60b347";
  number.textContent = secretNumber;
  if (currentScore > currenthighScore) {
    currenthighScore = currentScore;
    highScore.textContent = currenthighScore;
    localStorage.setItem("highScore", currenthighScore);
  }
  checkButton.removeEventListener("click", check);
}

function generateNewNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

function resetGame() {
  document.body.style.backgroundColor = "#222";
  currentScore = 20;
  score.textContent = currentScore;
  number.textContent = "?";
  secretNumber = generateNewNumber();
  input.value = "";
  message.textContent = "Start guessing...";
  checkButton.addEventListener("click", check);
}
