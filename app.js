let inputBtn = document.querySelector(".input-btn");
let input = document.querySelector(".input");
let screen = document.querySelector(".screen");

class GameController {
  constructor(word) {
    this.word = word;
  }

  setUi() {
    // Update screen to show letter boxes
  }

  getLetter(letter) {
    console.log(input.value);
  }
}

const game1 = new GameController("Cat");

inputBtn.addEventListener("click", game1.getLetter);
