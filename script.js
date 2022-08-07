const container = document.querySelector(".grid-container");
const slider = document.querySelector("input[type=range]");
const colorPicker = document.querySelector("input[type=color");
const label = document.querySelector("label");
const defaultSize = 16;

let grid = [];
let color = "black";
let mode = "color";

drawGrid(defaultSize);

slider.addEventListener("input", (e) => updateSlider(e.target.value));
slider.addEventListener("change", (e) => drawGrid(e.target.value));

colorPicker.addEventListener("input", (e) => (color = e.target.value));

//Displays updated size of the board
function updateSlider(val) {
	label.innerHTML = `${val} x ${val}`;
}

// Generates random hex color value
function randomColor() {
	let color = Math.floor(Math.random() * 16777215);
	color = "#" + color.toString(16);
	return color;
}

// draws the drawing grid
function drawGrid(size) {
	const divs = document.querySelectorAll(".grid");
	for (let div of divs) {
		div.remove();
	}

	let width = 100 / size;

	for (let i = 0; i < size; i++) {
		grid[i] = [];
		for (let j = 0; j < size; j++) {
			grid[i].push(document.createElement("div"));
			grid[i][j].classList.add("grid");
			grid[i][j].addEventListener("mouseenter", (e) => {
				drawColor(e);
			});
			grid[i][j].style.width = `${width}%`;
			grid[i][j].style.paddingBottom = `${width}%`;
			container.append(grid[i][j]);
		}
	}
}

function changeColor(e) {
	if (e.buttons == 0) return;
	e.target.style.backgroundColor = randomColor();
}

function drawColor(e) {
	if (e.buttons == 0) return;
	e.target.style.backgroundColor = color;
}

function draw(e) {
	if (e.buttons == 0) return;

	if (mode == "color") {
		e.target.style.backgroundColor = color;
	} else if (mode == "rainbow") {
		e.target.style.backgroundColor = randomColor();
	} else {
		e.target.style.backgroundColor = white;
	}
}
