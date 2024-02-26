let currentPlayer = "X";
let count = 0;
const playersTurn = document.getElementById("player-turn");

const winningConditions = [
  [1, 2, 3],
  [1, 4, 7],
  [1, 5, 9],
  [2, 5, 8],
  [3, 6, 9],
  [3, 5, 7],
  [4, 5, 6],
  [7, 8, 9],
];

let playerX = [];
let playerO = [];

const checkWin = (player) => {
  return winningConditions.some((condition) => {
    return condition.every((cell) => player.includes(cell));
  });
};

for (let i = 1; i <= 9; i++) {
  let cell = document.getElementById("cell" + i);
  console.log(cell.innerText);
  cell.addEventListener("click", () => {
    if (count === 0 && cell.innerText === "") {
      cell.innerText = "X";
      count += 1;
      playersTurn.innerText = "Player 2, its your turn!";
      playerX.push(i);
      console.log(playerX);
      if (checkWin(playerX)) {
        playersTurn.innerText = "Player 1 WINS!";
        playerX = [];
      }
    } else if (count === 1 && cell.innerText === "") {
      cell.innerText = "O";
      count -= 1;
      playersTurn.innerText = "Player 1, its your turn!";
      playerO.push(i);
      console.log(playerO);
      if (checkWin(playerO)) {
        playersTurn.innerText = "Player 2 WINS!";
        playerO = [];
      }
    }
  });
}

const resetCells = () => {
    document.getElementById("cell1").innerText = "";
    document.getElementById("cell2").innerText = "";
    document.getElementById("cell3").innerText = "";
    document.getElementById("cell4").innerText = "";
    document.getElementById("cell5").innerText = "";
    document.getElementById("cell6").innerText = "";
    document.getElementById("cell7").innerText = "";
    document.getElementById("cell8").innerText = "";
    document.getElementById("cell9").innerText = "";
    document.getElementById("player-turn").innerText = "Player 1, your playing as crosses!";
}

const button = document.getElementById("reset")
button.addEventListener("click", () => {
    resetCells();
})
