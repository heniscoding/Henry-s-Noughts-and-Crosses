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

  const winningCombinations = [
    [cell1, cell2, cell3],
    [cell1, cell4, cell7],
    [cell1, cell5, cell9],
    [cell2, cell5, cell8],
    [cell3, cell6, cell9],
    [cell3, cell5, cell7],
    [cell4, cell5, cell6],
    [cell7, cell8, cell9]
  ];

  for (const combination of winningCombinations) {
    if (combination.every(cell => cell === sign)) {
      playersTurnElement.innerText = `Player ${sign} WINS!`;
      setTimeout(resetCells, 2000);
      return;
    }
  }


  const allCellsFilled = [cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9].every(cell => cell !== "");
  if (allCellsFilled) {
    playersTurnElement.innerText = "It's a Tie!";
    setTimeout(resetCells, 2000);
  }
};

for (let i = 1; i <= 9; i++) {
  let cell = document.getElementById("cell" + i);
  cell.addEventListener("click", () => {
    if (cell.innerText === "") {
      cell.innerText = currentPlayer;
      count++;
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      playersTurn.innerText = `Player ${currentPlayer}, it's your turn!`;
      winningConditionsMet(currentPlayer === "X" ? "O" : "X", playersTurn);
    }
  });
}

const resetCells = () => {
  for (let i = 1; i <= 9; i++) {
    document.getElementById("cell" + i).innerText = "";
  }
  currentPlayer = "X";
  count = 0;
  playersTurn.innerText = "Player 1, you're playing as crosses!";
};

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetCells);