let currentPlayer = "X";
let count = 0;

for (let i = 1; i <= 9; i++) {
  let cell = document.getElementById("cell" + i);
    cell.addEventListener("click", () => {
    if (count === 0) {
      cell.innerText = "X";
      count += 1;

    } else {
      cell.innerText = "O";
      count -= 1;
  }
});
}
