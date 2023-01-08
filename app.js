let inputBtn = document.querySelector(".input-btn");
let input = document.querySelector(".input");
let screen = document.querySelector(".screen");

class Player {
  constructor(word) {
    this.word = word;
  }

  wordLength() {
    console.log(this.word.length);
  }
}

class GameController extends Player {
  constructor(letter, word) {
    super(word);
    this.letter = letter;
  }

  setUi() {
    // Update screen to show letter boxes for the word
  }

  getLetter() {
    console.log(input.value);
  }
}

const player1 = new Player("catt");
const hangman = new GameController("a");

inputBtn.addEventListener("click", () => {
  if (input.value.length <= 1 && input.value.length != 0) {
    hangman.getLetter();
  } else {
    console.log("enter one letter only");
  }
});
