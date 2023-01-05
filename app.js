let inputBtn = document.querySelector(".input-btn");
let input = document.querySelector(".input");
let screen = document.querySelector(".screen");

class Player {
  constructor(letter) {
    this.letter = letter;
  }
}

class GameController extends Player {
  constructor(letter, word) {
    super(letter);
    this.word = word;
  }

  setUi() {
    // Update screen to show letter boxes
  }

  getLetter() {
    console.log(input.value);
  }

  testLetter() {
    console.log(player1.letter);
  }
}

const player1 = new Player("t");
const hangman = new GameController("Cat");

inputBtn.addEventListener("click", hangman.testLetter);
