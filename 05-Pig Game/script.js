"use strict";

const player1Element = document.querySelector(".player--0");
const player2Element = document.querySelector(".player--1");
const player1CurrentScoreElement = document.getElementById("current--0");
const player2CurrentScoreElement = document.getElementById("current--1");
const player1ScoreElement = document.getElementById("score--0");
const player2ScoreElement = document.getElementById("score--1");
const diceElement = document.getElementsByClassName("dice");
const rollDiceButton = document.querySelector(".btn--roll");
const holdButton = document.querySelector(".btn--hold");
const newGameButton = document.querySelector(".btn--new");

let currentScoreElement = null;
let scoreElement = null;
let scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;
let dice = 1;

resetGame();

function resetGame() {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  dice = 0;
  player1ScoreElement.textContent = 0;
  player1CurrentScoreElement.textContent = 0;
  player2ScoreElement.textContent = 0;
  player2CurrentScoreElement.textContent = 0;
  diceElement[0].style.display = "none";
  selectPlayer(activePlayer);
  rollDiceButton.addEventListener("click", rollDice);
  holdButton.addEventListener("click", holdScore);
  newGameButton.addEventListener("click", resetGame);
  player1Element.classList.remove("player--winner");
  player2Element.classList.remove("player--winner");
}

function selectPlayer(player) {
  if (player === 0) {
    player1Element.classList.add("player--active");
    player2Element.classList.remove("player--active");
    currentScoreElement = player1CurrentScoreElement;
    scoreElement = player1ScoreElement;
  } else {
    player1Element.classList.remove("player--active");
    player2Element.classList.add("player--active");
    currentScoreElement = player2CurrentScoreElement;
    scoreElement = player2ScoreElement;
  }
}

function rollDice() {
  if (dice === 0) {
    diceElement[0].style.display = "block";
  }

  dice = Math.trunc(Math.random() * 6 + 1);
  diceElement[0].src = `dice-${dice}.png`;
  currentScore += dice;

  if (dice === 1) {
    currentScore = 0;
    currentScoreElement.textContent = currentScore;
    activePlayer = activePlayer ? 0 : 1;
    selectPlayer(activePlayer);
    return;
  }

  if (activePlayer === 0) {
    currentScoreElement.textContent = currentScore;
  } else {
    currentScoreElement.textContent = currentScore;
  }
}

function holdScore() {
  scores[activePlayer] += currentScore;
  currentScore = 0;
  scoreElement.textContent = scores[activePlayer];
  if (scores[activePlayer] >= 100) {
    currentScoreElement.textContent = 0;
    const player = document.querySelector(`.player--${activePlayer}`);
    player.classList.add("player--winner");
    player.classList.remove("player--active");
    rollDiceButton.removeEventListener("click", rollDice);
    holdButton.removeEventListener("click", holdScore);
    diceElement[0].style.display = "none";
    return;
  }

  currentScoreElement.textContent = 0;
  activePlayer = activePlayer ? 0 : 1;
  selectPlayer(activePlayer);
}
