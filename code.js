// IISE
const ticTacToe = (function () {
  const infoElement = document.getElementById("info");
  const cellElement = document.querySelectorAll(".cell");
  const cells = [];
  let player = "O";
  let playing = true;
  infoElement.innerText = `${player} : درحال بازی`;
  cellElement.forEach((item, index) => {
    item.addEventListener("click", (event) => cellClickHandler(event, index));
    cells[index] = {
      element: item,
      value: null,
      reset() {
        this.element.classList.remove(this.value);
        this.value = null;
      },
    };
  });
  function cellClickHandler(event, index) {
    if (playing && cells[index].value === null) {
      cells[index].value = player;
      cells[index].element.classList.add(player);
      togglePlayer();
      checkWinner();
    }
  }
  function togglePlayer() {
    player = player === "O" ? "X" : "O";
    infoElement.innerText = `${player} : درحال بازی`;
  }
  function checkWinner() {
    let winner = null;
    if (
      cells[0].value !== null &&
      cells[0].value === cells[1].value &&
      cells[0].value === cells[2].value
    )
      winner = cells[0].value;
    else if (
      cells[3].value !== null &&
      cells[3].value === cells[4].value &&
      cells[3].value === cells[5].value
    )
      winner = cells[3].value;
    else if (
      cells[6].value !== null &&
      cells[6].value === cells[7].value &&
      cells[6].value === cells[8].value
    )
      winner = cells[6].value;
    else if (
      cells[0].value !== null &&
      cells[0].value === cells[3].value &&
      cells[0].value === cells[6].value
    )
      winner = cells[0].value;
    else if (
      cells[1].value !== null &&
      cells[1].value === cells[4].value &&
      cells[1].value === cells[7].value
    )
      winner = cells[1].value;
    else if (
      cells[2].value !== null &&
      cells[2].value === cells[5].value &&
      cells[2].value === cells[8].value
    )
      winner = cells[2].value;
    else if (
      cells[0].value !== null &&
      cells[0].value === cells[4].value &&
      cells[0].value === cells[8].value
    )
      winner = cells[0].value;
    else if (
      cells[2].value !== null &&
      cells[2].value === cells[4].value &&
      cells[2].value === cells[6].value
    )
      winner = cells[2].value;

    if (winner !== null) {
      playing = false;
      infoElement.innerHTML = `${winner} : برنده <button onClick="ticTacToe.restart()">شروع مجدد</button>`;
    } else if (
      cells[0].value !== null &&
      cells[1].value !== null &&
      cells[2].value !== null &&
      cells[3].value !== null &&
      cells[4].value !== null &&
      cells[5].value !== null &&
      cells[6].value !== null &&
      cells[7].value !== null &&
      cells[8].value !== null
    ) {
      playing = false;
      infoElement.innerHTML = `پایان بازی <button onClick="ticTacToe.restart()">شروع مجدد</button>`;
    }
  }
  return {
    restart() {
      playing = true;
      player = player === "O" ? "X" : "O";
      infoElement.innerText = `${player} : درحال بازی`;
      cells.forEach((item) => item.reset());
    },
  };
})();
