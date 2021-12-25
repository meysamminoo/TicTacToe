// IISE
const TicTacToe = (function () {
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
        this.value = null;
      },
    };
  });
  function cellClickHandler(event, index) {
    if (playing && cells[index].value === null) {
      cells[index].vaalue = player;
      cells[index].element.classList.add(player);
    }
  }
})();
