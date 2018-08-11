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
const p = document.querySelector(".winner");



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


button.addEventListener('click', function () {
    grid.forEach(box => {
        box.addEventListener("click", ticTacToe);
        box.textContent = '';
    });
    init();
});

// Need to actually use a named function in order remove it from event listener

function ticTacToe(e) {
    if (e.target.textContent === '') {
        e.target.textContent = turnPlayer();
        turnCount++;
        checkWinner();
        checkTie();
        gameOver();
    }
}

function turnPlayer() {
    currentPlayer === player1 ? currentPlayer = player2 : currentPlayer = player1;
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


function checkCell(cell) {
    return currentPlayer.name === cell.textContent;
}

function checkHorizontal() {
    if (checkCell(one) && checkCell(two) && checkCell(three)) {
        displayWinner();
        return currentPlayer.isWinner = true;
    }
    if (checkCell(four) && checkCell(five) && checkCell(six)) {
        displayWinner()
        return currentPlayer.isWinner = true;
    }
    if (checkCell(seven) && checkCell(eight) && checkCell(nine)) {
        displayWinner();
        return currentPlayer.isWinner = true;
    }

}

function checkVertical() {
    if (checkCell(one) && checkCell(four) && checkCell(seven)) {
        displayWinner();
        return currentPlayer.isWinner = true;
    }
    if (checkCell(two) && checkCell(five) && checkCell(eight)) {
        displayWinner();
        return currentPlayer.isWinner = true;
    }
    if (checkCell(three) && checkCell(six) && checkCell(nine)) {
        displayWinner();
        return currentPlayer.isWinner = true;
    }
}

function checkDiagonal() {
    if (checkCell(one) && checkCell(five) && checkCell(nine)) {
        displayWinner();
        return currentPlayer.isWinner = true;
    }
    if (checkCell(three) && checkCell(five) && checkCell(seven)) {
        displayWinner();
        return currentPlayer.isWinner = true;
    }
}

function checkTie() {
    if (currentPlayer.isWinner === false && turnCount === 9) {
        displayTie();
        button.style.display = 'block';
    }
}

function gameOver() {
    if (currentPlayer.isWinner) {
        grid.forEach(box => {
            box.removeEventListener("click", ticTacToe);
            button.style.display = 'block';
        });
    }
}


function init() {
    turnCount = 0;
    p.textContent = '';
    player1.isWinner = false;
    player2.isWinner = false;
    currentPlayer = player2;
    button.style.display = 'none';
}

function displayWinner() {
    p.textContent = `${currentPlayer.name} wins!`
}

function displayTie() {
    p.textContent = "It's a tie!";
}