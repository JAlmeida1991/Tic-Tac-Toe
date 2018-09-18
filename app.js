// Global DOM variables
const grid = document.querySelectorAll(".grid");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const button = document.querySelector(".button");
const outcome = document.querySelector(".outcome");

// Player objects
class Player {
  constructor(name) {
    this.name = name;
    this.isWinner = false;
  }
}

const player1 = new Player("O");
const player2 = new Player("X");

// currentPlayer will point as a refrence to either player1 or player2

let currentPlayer;

// Need to store turn count in a variable in order to call tie function when it reaches 9

let turnCount = null;

// Event Listeners

grid.forEach(box => box.addEventListener("click", ticTacToe));

// This will handle the reset game logic
button.addEventListener("click", () => {
  grid.forEach(box => box.addEventListener("click", ticTacToe));
  init();
});

// Need to actually use a named function in order remove it from event listener

function ticTacToe(e) {
  if (e.target.textContent === "") {
    e.target.textContent = turnPlayer();
    turnCount++;
    checkWinner();
    checkTie();
    gameOver();
  }
}

function turnPlayer() {
  currentPlayer === player1
    ? (currentPlayer = player2)
    : (currentPlayer = player1);
  return currentPlayer.name;
}

function checkWinner() {
  if (currentPlayer.name === "X") {
    checkHorizontal();
    checkVertical();
    checkDiagonal();
  }
  if (currentPlayer.name === "O") {
    checkHorizontal();
    checkVertical();
    checkDiagonal();
  }
}

// Game Logic:

function checkHorizontal() {
  if (checkCells(one, two, three)) {
    displayWinner();
    changeWinnerColor(one, two, three);
    return (currentPlayer.isWinner = true);
  }
  if (checkCells(four, five, six)) {
    displayWinner();
    changeWinnerColor(four, five, six);
    return (currentPlayer.isWinner = true);
  }
  if (checkCells(seven, eight, nine)) {
    displayWinner();
    changeWinnerColor(seven, eight, nine);
    return (currentPlayer.isWinner = true);
  }
}

function checkVertical() {
  if (checkCells(one, four, seven)) {
    displayWinner();
    changeWinnerColor(one, four, seven);
    return (currentPlayer.isWinner = true);
  } else if (checkCells(two, five, eight)) {
    displayWinner();
    changeWinnerColor(two, five, eight);
    return (currentPlayer.isWinner = true);
  } else if (checkCells(three, six, nine)) {
    displayWinner();
    changeWinnerColor(three, six, nine);
    return (currentPlayer.isWinner = true);
  }
}

function checkDiagonal() {
  if (checkCells(one, five, nine)) {
    displayWinner();
    changeWinnerColor(one, five, nine);
    return (currentPlayer.isWinner = true);
  } else if (checkCells(three, five, seven)) {
    displayWinner();
    changeWinnerColor(three, five, seven);
    return (currentPlayer.isWinner = true);
  }
}

function checkTie() {
  if (currentPlayer.isWinner === false && turnCount === 9) {
    displayTie();
    button.style.display = "block";
  }
}

function gameOver() {
  if (currentPlayer.isWinner) {
    grid.forEach(box => {
      box.removeEventListener("click", ticTacToe);
      button.style.display = "block";
    });
  }
}

function init() {
  turnCount = 0;
  outcome.textContent = "";
  player1.isWinner = false;
  player2.isWinner = false;
  button.style.display = "none";
  removeWinnerColor();
  resetGrid();
}

function displayWinner() {
  outcome.textContent = `${currentPlayer.name} wins!`;
}

function displayTie() {
  outcome.textContent = "It's a tie!";
}

// Using rest param in order to add winning boxes to winningColor-js color
function changeWinnerColor(...boxes) {
  boxes.forEach(box => box.classList.add("winningColor-js"));
}

// Using rest param in order to call every and see if a player is a winner
function checkCells(...cells) {
  return cells.every(cell => cell.textContent === currentPlayer.name);
}

// Need to remove winningColor-js class since in a new game color change will persist if do not activelly remove it
function removeWinnerColor() {
  grid.forEach(box => box.classList.remove("winningColor-js"));
}
// Need to reset grid otherwise values from previous game will still be present
function resetGrid() {
  grid.forEach(box => (box.textContent = ""));
}
