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
const button = document.querySelector("button");


//// Need to work on logic for Play Again button


const player1 = {
    name: "O",
    isWinner: false
}

const player2 = {
    name: "X",
    isWinner: false
}

let currentPlayer;
let turnCount = 0;


for (let i = 0; i < grid.length; i++) {
    grid[i].addEventListener("click", ticTacToe);
}

button.addEventListener('click', function () {
    for (let i = 0; i < grid.length; i++) {
        grid[i].addEventListener("click", ticTacToe);
        grid[i].textContent = '';
    }
    init();
});


function ticTacToe() {
    if (this.textContent === '') {
        this.textContent = turnPlayer();
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
        console.log(`${currentPlayer.name} wins!`);
        return currentPlayer.isWinner = true;
    }
    if (checkCell(four) && checkCell(five) && checkCell(six)) {
        console.log(`${currentPlayer.name} wins!`);
        return currentPlayer.isWinner = true;
    }
    if (checkCell(seven) && checkCell(eight) && checkCell(nine)) {
        console.log(`${currentPlayer.name} wins!`);
        // console.log("goodbye World");
        return currentPlayer.isWinner = true;
    }

}

function checkVertical() {
    if (checkCell(one) && checkCell(four) && checkCell(seven)) {
        console.log(`${currentPlayer.name} wins!`);
        return currentPlayer.isWinner = true;
    }
    if (checkCell(two) && checkCell(five) && checkCell(eight)) {
        console.log(`${currentPlayer.name} wins!`);
        return currentPlayer.isWinner = true;
    }
    if (checkCell(three) && checkCell(six) && checkCell(nine)) {
        console.log(`${currentPlayer.name} wins!`);
        return currentPlayer.isWinner = true;
    }
}

function checkDiagonal() {
    if (checkCell(one) && checkCell(five) && checkCell(nine)) {
        console.log(`${currentPlayer.name} wins!`);
        return currentPlayer.isWinner = true;
    }
    if (checkCell(three) && checkCell(five) && checkCell(seven)) {
        console.log(`${currentPlayer.name} wins!`);
        return currentPlayer.isWinner = true;
    }
}

function checkTie() {
    if (currentPlayer.isWinner === false && turnCount === 9) {
        console.log("Tie!");
        button.style.display = 'block';
    }
}

function gameOver() {
    if (currentPlayer.isWinner) {
        for (let i = 0; i < grid.length; i++) {
            grid[i].removeEventListener("click", ticTacToe);
            button.style.display = 'block';
        }
    }
}


function init() {
    turnCount = 0;
    player1.isWinner = false;
    player2.isWinner = false;
    currentPlayer = player1;
    button.style.display = 'none';
}