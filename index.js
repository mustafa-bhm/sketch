const gridContainer = document.querySelector(".container");
const userValue = document.querySelector(".user-number");
const userSubmit = document.querySelector(".user-submit");
const warning = document.querySelector(".warning");
const reset = document.querySelector(".reset");
const gridSize = document.querySelector(".grid-size");
const columns = document.getElementsByClassName("column");

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
function draw() {
  for (let i = 0; i < columns.length; i++) {
    columns[i].addEventListener("mouseover", changeColor);
    // columns[i].addEventListener("mouseover", changeColor);
  }
}

const redBtn = document.getElementById("red");
const blackBtn = document.getElementById("black");
const greenBtn = document.getElementById("green");
const erasebtn = document.getElementById("erase");
const rainbowBtn = document.getElementById("rainbow");
const resetBtn = document.getElementsByClassName("reset")[0];
const colorPicker = document.getElementById("color-picker");

// to have the rainbow btn selected by default
rainbowBtn.checked = true;

function changeColor() {
  if (redBtn.checked) {
    this.style.backgroundColor = "#da2d2d";
    // console.log(redBtn.checked);
  } else if (blackBtn.checked) {
    this.style.backgroundColor = "#2e2b2b";
    // console.log("black");
  } else if (greenBtn.checked) {
    this.style.backgroundColor = "#2dbc1a";
    // console.log("green");
  } else if (erasebtn.checked) {
    this.style.backgroundColor = "";
  } else if (rainbow.checked) {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    this.style.backgroundColor = "#" + randomColor;
  } else if (colorPicker) {
    this.style.backgroundColor = colorPicker.value;
    console.log(colorPicker.value);
  } else {
    this.style.backgroundColor = "";
  }
}

function resetGrid() {
  for (let i = 0; i < columns.length; i++) {
    columns[i].style.backgroundColor = "";
  }
}
resetBtn.addEventListener("click", resetGrid);

createGrid();
draw();
