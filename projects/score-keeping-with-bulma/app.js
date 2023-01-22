const player1 = {
  score: 0,
  button: document.querySelector("#p1Button"),
  display: document.querySelector("#p1Display")
};

const player2 = {
  score: 0,
  button: document.querySelector("#p2Button"),
  display: document.querySelector("#p2Display")
};

const resetButton = document.querySelector("#resetButton");
const winningScoreSelect = document.querySelector("#playto");
let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

player1.button.addEventListener("click", () => {
  updateScores(player1, player2);
});

player2.button.addEventListener("click", () => {
  updateScores(player2, player1);
});

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  resetGame();
});

resetButton.addEventListener("click", resetGame);

function resetGame() {
  isGameOver = false;
  for (let p of [player1, player2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove("has-text-success", "has-text-danger");
    p.button.disabled = false;
  }
}

// Code v1:
// const p1Button = document.querySelector("#p1Button");
// const p2Button = document.querySelector("#p2Button");
// const resetButton = document.querySelector("#resetButton");
// const p1Display = document.querySelector("#p1Display");
// const p2Display = document.querySelector("#p2Display");
// const winningScoreSelect = document.querySelector("#playto");

// let p1Score = 0;
// let p2Score = 0;
// let winningScore = 5;
// let isGameOver = false;

// p1Button.addEventListener("click", () => {
//   if (!isGameOver) {
//     p1Score++;
//     if (p1Score === winningScore) {
//       isGameOver = true;
//       p1Display.classList.add("has-text-success");
//       p2Display.classList.add("has-text-danger");
//       p1Button.disabled = true;
//       p2Button.disabled = true;
//     }
//     p1Display.textContent = p1Score;
//   }
// });

// p2Button.addEventListener("click", () => {
//   if (!isGameOver) {
//     p2Score++;
//     if (p2Score === winningScore) {
//       isGameOver = true;
//       p2Display.classList.add("has-text-success");
//       p1Display.classList.add("has-text-danger");
//       p1Button.disabled = true;
//       p2Button.disabled = true;
//     }
//     p2Display.textContent = p2Score;
//   }
// });

// winningScoreSelect.addEventListener("change", function () {
//   winningScore = parseInt(this.value);
//   resetGame();
// });

// resetButton.addEventListener("click", resetGame);

// function resetGame() {
//   isGameOver = false;
//   p1Score = 0;
//   p2Score = 0;
//   p1Display.textContent = p1Score;
//   p2Display.textContent = p2Score;
//   p1Display.classList.remove("has-text-success", "has-text-danger");
//   p2Display.classList.remove("has-text-success", "has-text-danger");
//   p1Button.disabled = false;
//   p2Button.disabled = false;
// }
