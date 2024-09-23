const size_btn = document.querySelector(".size_btn");
const clear_btn = document.querySelector(".clear_btn");
const random_btn = document.querySelector(".color_rnd_btn");
const erase_btn = document.querySelector(".erase_btn");
const colorPicker = document.querySelector("#colorPicker");
let selectedColor = "black";
let random_coloring = false;

function getRandomInt(min, max) {
  return String(Math.floor(Math.random() * (max - min + 1)) + min);
}

function get_color() {
  if (random_coloring) {
    const r = getRandomInt(0, 255),
      g = getRandomInt(0, 255),
      b = getRandomInt(0, 255);
    return `rgb(${r},${g},${b})`;
  }
  return selectedColor;
}

function update_grid_size(n) {
  let container = document.querySelector(".container");
  if (container !== null) {
    container.remove();
  }
  container = document.createElement("div");
  container.className = "container";
  for (let i = 0; i < n * n; i++) {
    const div = document.createElement("div");
    let baise = String(100 / n);
    div.setAttribute(
      "style",
      "flex: 1 0 " + baise + "%;box-sizing: border-box; "
    );
    div.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = get_color();
    });
    container.appendChild(div);
  }
  const body = document.querySelector("body");
  body.appendChild(container);
}

function clear_grid() {
  const divs = document.querySelectorAll(".container div");
  divs.forEach((div) => {
    div.style.backgroundColor = "white";
  });
}

update_grid_size(2);

size_btn.addEventListener("click", () => {
  let n = 0;
  while (!(n >= 1 && n <= 100)) {
    n = prompt("Enter number of pixels in side (min: 1, max: 100)");
  }
  update_grid_size(n);
});

clear_btn.addEventListener("click", () => {
  clear_grid();
});

random_btn.addEventListener("click", () => {
  random_coloring = true;
});

erase_btn.addEventListener("click", () => {
  random_coloring = false;
  selectedColor = "white";
});

colorPicker.addEventListener("input", (e) => {
  random_coloring = false;
  selectedColor = e.target.value;
});
