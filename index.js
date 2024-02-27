let currentPlayer = "X";
let count = 0;
const playersTurn = document.getElementById("player-turn");

const winningConditionsMet = (sign, playersTurnElement) => {
  const cell1 = document.getElementById("cell1").innerText;
  const cell2 = document.getElementById("cell2").innerText;
  const cell3 = document.getElementById("cell3").innerText;
  const cell4 = document.getElementById("cell4").innerText;
  const cell5 = document.getElementById("cell5").innerText;
  const cell6 = document.getElementById("cell6").innerText;
  const cell7 = document.getElementById("cell7").innerText;
  const cell8 = document.getElementById("cell8").innerText;
  const cell9 = document.getElementById("cell9").innerText;
  if (
    (cell1 === sign && cell2 === sign && cell3 === sign) ||
    (cell1 === sign && cell4 === sign && cell7 === sign) ||
    (cell1 === sign && cell5 === sign && cell9 === sign) ||
    (cell2 === sign && cell5 === sign && cell8 === sign) ||
    (cell3 === sign && cell6 === sign && cell9 === sign) ||
    (cell3 === sign && cell5 === sign && cell7 === sign) ||
    (cell4 === sign && cell5 === sign && cell6 === sign) ||
    (cell7 === sign && cell8 === sign && cell9 === sign)
  ) {
    playersTurnElement.innerText = `Player ${sign} WINS!`;
    setTimeout(resetCells,1000);
  }
};

let playerX = [];
let playerO = [];

for (let i = 1; i <= 9; i++) {
  let cell = document.getElementById("cell" + i);
  cell.addEventListener("click", () => {
    if (count === 0 && cell.innerText === "") {
      cell.innerText = "X";
      count += 1;
      playersTurn.innerText = "Player 2, it's your turn!";
      playerX.push(i);
      winningConditionsMet("X", playersTurn);
      playerX = [];
    } else if (count === 1 && cell.innerText === "") {
      cell.innerText = "O";
      count -= 1;
      playersTurn.innerText = "Player 1, it's your turn!";
      playerO.push(i);
      winningConditionsMet("O", playersTurn);
      playerO = [];
    }
  });
}

const resetCells = () => {
  for (let i = 1; i <= 9; i++) {
    document.getElementById("cell" + i).innerText = "";
  }
  playersTurn.innerText = "Player 1, you're playing as crosses!";
};

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetCells);
