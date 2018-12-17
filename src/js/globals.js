// Global DOM variables
const grid = document.querySelectorAll(".grid");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const button = document.querySelector(".btn");
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

const gameObj = {
  currentPlayer: null,
  turnCount: null
};

export {
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
};
