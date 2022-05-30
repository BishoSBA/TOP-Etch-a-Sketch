const container = document.querySelector(".container");

let grid = [];
let defaultSize = 16;

drawGrid(defaultSize);

const btn = document.querySelector(".start");
btn.addEventListener("click", chooseSize);

// prompts the user for a size number for the grid whe button is pressed
function chooseSize() {
	let size = defaultSize;
	do {
		size = window.prompt("Choose the size of the grid 1-100", 16);
		size = parseInt(size);
	} while (size >= 100 || size <= 0);

	drawGrid(size);
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
			grid[i][j].style.backgroundColor = randomColor();
			grid[i][j].classList.add("grid");
			//console.log(randomColor());
			grid[i][j].style.width = `${width}%`;
			grid[i][j].style.paddingBottom = `${width}%`;
			container.append(grid[i][j]);
		}
	}
}
