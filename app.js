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

  getWord() {
    console.log(player1.word);
  }
}

const player1 = new Player("catt");
const hangman = new GameController("a");

inputBtn.addEventListener("click", () => {
  player1.wordLength();
});
