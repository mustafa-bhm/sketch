let gridContainer = document.querySelector(".container");
let userValue = document.querySelector(".user-number");
let userSubmit = document.querySelector(".user-submit");
let warning = document.querySelector(".warning");
let reset = document.querySelector(".reset");
let gridSize = document.querySelector(".grid-size");

userSubmit.addEventListener("click", createGrid);

function defaultGrid() {
  for (let i = 0; i < 10; i++) {
    gridSize.textContent = `Grid size 10 x 10`;
    let row = document.createElement("div");
    row.classList.add("row");
    gridContainer.appendChild(row);
    for (let k = 0; k < 10; k++) {
      let column = document.createElement("div");
      column.classList.add("column");
      row.appendChild(column);
    }
  }
}

function createGrid() {
  let number = userValue.value;
  console.log(number);
  if (number < 0 || number > 99 || isNaN(number)) {
    alert("Pleae enter a valid number");
  } else {
    gridSize.textContent = "";
    userValue.value = "";
    // to clear the previous grid before adding new one
    gridContainer.innerHTML = "";
    if (number == 0 || number > 99 || number == "") {
      defaultGrid();
    } else {
      for (let i = 0; i < number; i++) {
        gridSize.textContent = `Grid size ${number} x ${number}`;
        let row = document.createElement("div");
        row.classList.add("row");
        gridContainer.appendChild(row);
        for (let k = 0; k < number; k++) {
          let column = document.createElement("div");
          column.classList.add("column");
          row.appendChild(column);
        }
      }
    }
  }
}

createGrid();
