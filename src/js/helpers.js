import {
  grid,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  button,
  outcome,
  player1,
  player2,
  gameObj
} from "./globals";

// Need to actually use a named function in order remove it from event listener

function ticTacToe(e) {
  if (e.target.textContent === "") {
    e.target.textContent = turnPlayer();
    gameObj.turnCount++;
    checkWinner();
    checkTie();
  } else {
    alert("That square has already been selected!");
  }
}

function turnPlayer() {
  gameObj.currentPlayer === player1
    ? (gameObj.currentPlayer = player2)
    : (gameObj.currentPlayer = player1);
  return gameObj.currentPlayer.name;
}

function checkWinner() {
  if (gameObj.currentPlayer.name === "X") {
    checkHorizontal();
    checkVertical();
    checkDiagonal();
  }
  if (gameObj.currentPlayer.name === "O") {
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
    gameOver();
    return (gameObj.currentPlayer.isWinner = true);
  }
  if (checkCells(four, five, six)) {
    displayWinner();
    changeWinnerColor(four, five, six);
    gameOver();
    return (gameObj.currentPlayer.isWinner = true);
  }
  if (checkCells(seven, eight, nine)) {
    displayWinner();
    changeWinnerColor(seven, eight, nine);
    gameOver();
    return (gameObj.currentPlayer.isWinner = true);
  }
}

function checkVertical() {
  if (checkCells(one, four, seven)) {
    displayWinner();
    changeWinnerColor(one, four, seven);
    gameOver();
    return (gameObj.currentPlayer.isWinner = true);
  } else if (checkCells(two, five, eight)) {
    displayWinner();
    changeWinnerColor(two, five, eight);
    gameOver();
    return (gameObj.currentPlayer.isWinner = true);
  } else if (checkCells(three, six, nine)) {
    displayWinner();
    changeWinnerColor(three, six, nine);
    gameOver();
    return (gameObj.currentPlayer.isWinner = true);
  }
}

function checkDiagonal() {
  if (checkCells(one, five, nine)) {
    displayWinner();
    changeWinnerColor(one, five, nine);
    gameOver();
    return (gameObj.currentPlayer.isWinner = true);
  } else if (checkCells(three, five, seven)) {
    displayWinner();
    changeWinnerColor(three, five, seven);
    gameOver();
    return (gameObj.currentPlayer.isWinner = true);
  }
}

function checkTie() {
  if (gameObj.currentPlayer.isWinner === false && gameObj.turnCount === 9) {
    displayTie();
    gameOver();
    button.style.display = "block";
  }
}

function gameOver() {
  grid.forEach(box => {
    box.removeEventListener("click", ticTacToe);
    button.style.display = "block";
  });
}

function init() {
  gameObj.turnCount = 0;
  outcome.textContent = "";
  player1.isWinner = false;
  player2.isWinner = false;
  button.style.display = "none";
  removeWinnerColor();
  resetGrid();
}

function displayWinner() {
  outcome.textContent = `${gameObj.currentPlayer.name} wins!`;
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
  return cells.every(cell => cell.textContent === gameObj.currentPlayer.name);
}

// Need to remove winningColor-js class since in a new game color change will persist if do not activelly remove it
function removeWinnerColor() {
  grid.forEach(box => box.classList.remove("winningColor-js"));
}
// Need to reset grid otherwise values from previous game will still be present
function resetGrid() {
  grid.forEach(box => (box.textContent = ""));
}

export { init, ticTacToe };
